namespace ShapeUpBackendApi.Training.Models {
    
    public enum ExerciseLevel {
        Easy,
        Medium,
        Hard
    }
    public class Exercise {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public ExerciseLevel Level { get; set; }
        public string? TutorialUrl { get; set; }
    }
}
