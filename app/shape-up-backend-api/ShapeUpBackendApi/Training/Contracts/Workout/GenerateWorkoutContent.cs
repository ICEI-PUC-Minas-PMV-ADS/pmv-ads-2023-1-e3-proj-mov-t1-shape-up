using ShapeUpBackendApi.Training.Services;

namespace ShapeUpBackendApi.Training.Contracts.Workout {
    public class GenerateWorkoutContent {
        public string Username { get; set; }
        public Goal Goal { get; set; }
        public TrainingExp TrainingExp { get; set; }
        public Timeline Timeline { get; set; }
    }
}
