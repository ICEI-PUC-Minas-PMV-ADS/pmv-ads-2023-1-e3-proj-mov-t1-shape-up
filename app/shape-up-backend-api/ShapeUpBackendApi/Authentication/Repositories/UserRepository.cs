using Microsoft.EntityFrameworkCore;
using ShapeUpBackendApi.Authentication.Models;
using ShapeUpBackendApi.Data;

namespace ShapeUpBackendApi.Authentication.Repositories {
    public class UserRepository {

        private readonly ApplicationDBContext _context;
        public UserRepository(ApplicationDBContext context) {
            _context = context;
        }

        public async Task<bool> AddUser(User user) {

            if (await ContainsWithUsername(user.Username)) {
                return false;
            }

            await _context.AddAsync(user);
            await _context.SaveChangesAsync();

            return true;
        }
        public async Task<User?> GetUser(string username) {
            return await _context.Users.
                FirstOrDefaultAsync(u => u.Username.ToLower() == username.ToLower());
        }

        public async Task<bool> ContainsWithUsername(string username) {
            return await _context.Users.
                AnyAsync(u => u.Username.ToLower() == username.ToLower());
        }
    }
}
