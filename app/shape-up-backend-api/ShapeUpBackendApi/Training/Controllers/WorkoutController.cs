using Microsoft.AspNetCore.Mvc;
using ShapeUpBackendApi.Training.Models;
using ShapeUpBackendApi.Training.Repositories;

namespace ShapeUpBackendApi.Training.Controllers {
    public class WorkoutController : Controller {

        private readonly WorkoutRepository _workoutRepository;
        public WorkoutController(WorkoutRepository workoutRepository) {
            _workoutRepository = workoutRepository;
        }
        public ActionResult<Workout> Index(Guid id) {
            
            var workout = _workoutRepository.GetById(id);

            if (workout is null) {
                return NotFound();
            }

            return Ok(workout);
        }
        public ActionResult<IEnumerable<Workout>> GetByUsername(string username) {
            
            var workout = _workoutRepository.GetByUsername(username);

            return Ok(workout);
        }
        public ActionResult<IEnumerable<Workout>> GenerateWorkout() {
            return Ok();
        }
    }
}
