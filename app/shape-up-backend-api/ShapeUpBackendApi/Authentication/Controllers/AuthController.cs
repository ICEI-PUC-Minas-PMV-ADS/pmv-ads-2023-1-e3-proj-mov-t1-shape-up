using Microsoft.AspNetCore.Mvc;
using ShapeUpBackendApi.Authentication.Contracts.Login;
using ShapeUpBackendApi.Authentication.Contracts.Register;
using ShapeUpBackendApi.Authentication.Models;
using ShapeUpBackendApi.Authentication.Repositories;
using ShapeUpBackendApi.Authentication.Services;

namespace ShapeUpBackendApi.Authentication.Controllers {
    [ApiController]
    [Route("v1/[controller]")]
    public class AuthController : ControllerBase {

        private readonly RefreshTokenRepository _refreshTokenRepository;
        private readonly UserRepository _repository;
        private readonly TokenService _tokenService;
        private readonly PasswordService _passwordService;
        public AuthController(
            UserRepository userRepository,
            RefreshTokenRepository refreshTokenRepository,
            TokenService tokenService,
            PasswordService passwordService) {

            _repository = userRepository;
            _refreshTokenRepository = refreshTokenRepository;
            _tokenService = tokenService;
            _passwordService = passwordService;
        }
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<LoginResponse>> LoginAsync([FromBody] LoginContent model) {

            var user = await _repository.GetUser(model.Username);
            var userResponse = new LoginResponse();

            if (user is null) {
                userResponse.Username = model.Username;
                userResponse.IsAuthenticated = false;

                return NotFound(userResponse);
            }

            if (!_passwordService.VerifyPassword(model.Password, user.Password)) {
                return NotFound(userResponse);
            }

            var token = _tokenService.GenerateToken(user);
            var refreshToken = _tokenService.GenerateRefreshToken();

            await _refreshTokenRepository.DeleteRefreshToken(user.Username);
            await _refreshTokenRepository.
                SaveRefreshToken(new RefreshToken { Token = refreshToken, Username = user.Username });

            userResponse.Username = model.Username;
            userResponse.IsAuthenticated = true;
            userResponse.Name = user.Name;
            userResponse.Token = token;
            userResponse.RefreshToken = refreshToken;

            return Ok(userResponse);
        }

        [HttpPost]
        [Route("register")]
        public async Task<ActionResult<RegisterResponse>> RegisterAsync([FromBody] RegisterContent content, IFormFile formFile) {

            var user = new User {
                Id = Guid.NewGuid(),
                Name = content.Name,
                Username = content.Username,
                Password = _passwordService.EncryptPassword(content.Password)
            };

            if (formFile != null) {
                MemoryStream memoryStream = new MemoryStream();
                formFile.CopyTo(memoryStream);
                string base64Data = Convert.ToBase64String(memoryStream.ToArray());
                user.ImageUrl = string.Format("data:image/jpg;base64, {0}", base64Data);
            }

            var userResponse = new RegisterResponse {
                IsAuthenticated = false,
            };

            if (await _repository.AddUser(user) is false) {
                return UnprocessableEntity(userResponse);
            }

            var token = _tokenService.GenerateToken(user);
            var refreshToken = _tokenService.GenerateRefreshToken();

            await _refreshTokenRepository.
                SaveRefreshToken(new Models.RefreshToken { Token = refreshToken, Username = user.Username });

            userResponse.Username = user.Username;
            userResponse.IsAuthenticated = true;
            userResponse.Name = user.Name;
            userResponse.Token = token;
            userResponse.RefreshToken = refreshToken;

            return Ok(userResponse);
        }
    }
}
