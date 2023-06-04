using ShapeUpBackendApi.Data;
using ShapeUpBackendApi.Training.Models;

namespace ShapeUpBackendApi.Training.Repositories {
    public class ExerciseRepository {

        private readonly ApplicationDBContext _context;
        public ExerciseRepository(ApplicationDBContext context) {
            _context = context;
        }
        public void Add(Exercise exercise) {
            _context.Exercises.Add(exercise);
            _context.SaveChanges();
        }
        public void Delete(Guid id) {

            var exercise = _context.Exercises.FirstOrDefault(x => x.Id == id);

            if (exercise is not null) {
                _context.Exercises.Remove(exercise);
                _context.SaveChanges();
            }
        }
        public Exercise? GetById(Guid id) {
            return _context.Exercises.FirstOrDefault(x => x.Id == id);
        }
        public IEnumerable<Exercise> GetAll() {
            return _context.Exercises;
        }
    }
}