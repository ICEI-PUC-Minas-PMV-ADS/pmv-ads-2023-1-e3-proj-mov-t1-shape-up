using Microsoft.AspNetCore.Mvc;
using ShapeUpBackendApi.Authentication.Contracts.CheckToken;
using ShapeUpBackendApi.Authentication.Contracts.Refresh;
using ShapeUpBackendApi.Authentication.Models;
using ShapeUpBackendApi.Authentication.Repositories;
using ShapeUpBackendApi.Authentication.Services;

namespace ShapeUpBackendApi.Authentication.Controllers {

    [ApiController]
    [Route("v1/auth/[controller]")]
    public class TokenController : ControllerBase {

        private readonly RefreshTokenRepository _repository;
        private readonly TokenService _tokenService;
        public TokenController(
            RefreshTokenRepository repository,
            TokenService tokenService) {

            _repository = repository;
            _tokenService = tokenService;
        }

        [HttpPost]
        [Route("refresh")]
        public async Task<ActionResult<RefreshTokenResponse>> RefreshAsync([FromBody] RefreshTokenContent content) {

            var principal = _tokenService.GetPrincipalFromExpiredToken(content.Token);
            var username = principal.Identity.Name;
            var savedRefreshToken = await _repository.GetRefreshToken(username);

            if (savedRefreshToken.ToString() != content.RefreshToken)
                return Unauthorized(null);

            var newToken = _tokenService.GenerateToken(principal.Claims);
            var newRefreshToken = _tokenService.GenerateRefreshToken();

            await _repository.DeleteRefreshToken(username);
            await _repository.SaveRefreshToken(new RefreshToken { Token = newRefreshToken, Username = username });

            var response = new RefreshTokenResponse {
                Token = newToken,
                RefreshToken = newRefreshToken
            };

            return Ok(response);
        }

        [HttpPost]
        [Route("check")]
        public async Task<ActionResult<CheckTokenResponse>> CheckAsync([FromBody] CheckTokenContent content) {

            if (!_tokenService.ValidateToken(content.Token, content.Username)) {
                return Unauthorized(new CheckTokenResponse { IsExpired = false, IsValid = false });
            }

            return Ok(new CheckTokenResponse {
                IsValid = true,
                IsExpired = _tokenService.IsExpiredToken(content.Token)
            });
        }
    }
}
