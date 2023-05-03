using Microsoft.EntityFrameworkCore;
using ShapeUpBackendApi.Authentication.Models;
using ShapeUpBackendApi.Data;

namespace ShapeUpBackendApi.Authentication.Repositories {
    public class RefreshTokenRepository {

        private readonly ApplicationDBContext _context;
        public RefreshTokenRepository(ApplicationDBContext context) {
            _context = context;
        }

        public async Task SaveRefreshToken(RefreshToken refreshToken) {

            if (await ContainsForUsername(refreshToken.Username)) {
                throw new InvalidOperationException("The database contains a refresh token for this username.");
            }

            await _context.RefreshTokens.AddAsync(refreshToken);
            await _context.SaveChangesAsync();
        }

        public async Task<RefreshToken?> GetRefreshToken(string username) {
            return await _context.RefreshTokens.
                FirstOrDefaultAsync(rt => rt.Username.ToLower() == username.ToLower());
        }
        public async Task DeleteRefreshToken(string username) {
            var refreshToken = await _context.RefreshTokens.
                FirstOrDefaultAsync(rt => rt.Username.ToLower() == username.ToLower());

            if (refreshToken is not null) {
                _context.RefreshTokens.Remove(refreshToken);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> ContainsForUsername(string username) {
            return await _context.RefreshTokens.
                AnyAsync(rt => rt.Username.ToLower() == username.ToLower());
        }
    }
}
