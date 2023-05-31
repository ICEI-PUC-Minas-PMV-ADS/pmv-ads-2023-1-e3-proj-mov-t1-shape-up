using Microsoft.EntityFrameworkCore;
using ShapeUpBackendApi.Authentication.Models;
using ShapeUpBackendApi.Training.Models;

namespace ShapeUpBackendApi.Data {
    public class ApplicationDBContext : DbContext {
        public ApplicationDBContext(DbContextOptions options) :
            base(options) {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
        public DbSet<ExerciseDetail> ExerciseDetails { get; set; }
        public DbSet<Workout> Workouts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            modelBuilder.Entity<Workout>()
                .HasMany(w => w.Exercises)
                .WithOne()
                .HasForeignKey(w => w.WorkoutId);

            modelBuilder.Entity<ExerciseDetail>()
                .HasOne(ed => ed.Exercise)
                .WithMany()
                .HasForeignKey(ed => ed.ExerciseId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
