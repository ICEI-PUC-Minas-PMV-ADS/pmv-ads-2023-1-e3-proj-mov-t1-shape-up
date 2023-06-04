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
        public void AddRange(IEnumerable<Workout> workouts) {
            _context.Workouts.AddRange(workouts);
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
        public IEnumerable<Workout> GetByUsername(string username) {
            return _context.Workouts.Where(w => w.Username == username);
        }
        public IEnumerable<Workout> GetAll() {
            return _context.Workouts;
        }
    }
}
