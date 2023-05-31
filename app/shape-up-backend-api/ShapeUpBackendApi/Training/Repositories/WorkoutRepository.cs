using ShapeUpBackendApi.Data;
using ShapeUpBackendApi.Training.Models;

namespace ShapeUpBackendApi.Training.Repositories {
    public class WorkoutRepository {
        private readonly ApplicationDBContext _context;
        public WorkoutRepository(ApplicationDBContext context) {
            _context = context;
        }
        public void Add(Workout workout) {
            _context.Workouts.Add(workout);
            _context.SaveChanges();
        }
        public void Delete(Guid id) {

            var workout = _context.Workouts.FirstOrDefault(x => x.Id == id);

            if (workout is not null) {
                _context.Workouts.Remove(workout);
            }
        }
        public Workout? GetById(Guid id) {
            return _context.Workouts.FirstOrDefault(x => x.Id == id);
        }
        public Workout? GetByUsername(string username) {
            return _context.Workouts.FirstOrDefault(x => x.Username == username);
        }
        public IEnumerable<Workout> GetAll() {
            return _context.Workouts;
        }
    }
}
