using Microsoft.AspNetCore.Mvc;
using ShapeUpBackendApi.Internals;
using ShapeUpBackendApi.Training.Models;
using ShapeUpBackendApi.Training.Repositories;

namespace ShapeUpBackendApi.Training.Controllers {
    [ApiController]
    [Route("v1/training/[controller]")]
    public class ExerciseController : Controller {

        private readonly ExerciseRepository _exerciseRepository;
        public ExerciseController(ExerciseRepository exerciseRepository) {
            _exerciseRepository = exerciseRepository;
        }
        [HttpGet]
        public ActionResult<Exercise> Index(Guid id) {

            var exercise = _exerciseRepository.GetById(id);

            if (exercise is null) {
                return NotFound();
            }
            
            return Ok(exercise);
        }
        [HttpGet]
        [Route("all")]
        public ActionResult<IEnumerable<Exercise>> GetAll() {
            
            var exercises = _exerciseRepository.GetAll();

            return Ok(exercises);
        }
        [HttpPost]
        [Route("add")]
        public ActionResult<Exercise> AddExercise([FromBody]Exercise exercise) {

            _exerciseRepository.Add(exercise);

            return Ok(exercise);
        }

        [HttpPost]
        [Route("delete")]
        public ActionResult DeleteExercise(Guid id) {

            _exerciseRepository.Delete(id);

            return Ok();
        }
    }
}
