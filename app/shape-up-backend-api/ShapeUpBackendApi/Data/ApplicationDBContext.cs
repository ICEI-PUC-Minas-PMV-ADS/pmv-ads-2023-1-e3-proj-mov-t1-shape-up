using Microsoft.EntityFrameworkCore;
using ShapeUpBackendApi.Authentication.Models;

namespace ShapeUpBackendApi.Data {
    public class ApplicationDBContext : DbContext {
        public ApplicationDBContext(DbContextOptions options) :
            base(options) {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}
