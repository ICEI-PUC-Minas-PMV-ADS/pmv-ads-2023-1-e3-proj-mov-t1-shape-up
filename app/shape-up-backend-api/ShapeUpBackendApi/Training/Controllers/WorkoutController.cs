using Microsoft.AspNetCore.Mvc;
using ShapeUpBackendApi.Training.Contracts.Workout;
using ShapeUpBackendApi.Training.Models;
using ShapeUpBackendApi.Training.Repositories;
using ShapeUpBackendApi.Training.Services;

namespace ShapeUpBackendApi.Training.Controllers {
    public class WorkoutController : Controller {

        private readonly WorkoutRepository _workoutRepository;
        private readonly TrainingGeneratorService _trainingGeneratorService;
        public WorkoutController(WorkoutRepository workoutRepository, TrainingGeneratorService trainingGeneratorService) {
            _workoutRepository = workoutRepository;
            _trainingGeneratorService = trainingGeneratorService;
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
        public ActionResult<IEnumerable<Workout>> GenerateWorkout([FromBody]GenerateWorkoutContent content) {

            var workouts = _trainingGeneratorService.GetWorkouts(content.Username, content.Goal, content.TrainingExp, content.Timeline);

            _workoutRepository.AddRange(workouts);

            return Ok(workouts);
        }
    }
}
