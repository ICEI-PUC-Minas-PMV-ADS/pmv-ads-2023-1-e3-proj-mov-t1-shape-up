namespace ShapeUpBackendApi.Training.Models {
    public class Workout {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Username { get; set; }
        public string? ImageData { get; set; }
        public DateTime LastRun { get; set; }
        public ICollection<ExerciseDetail> Exercises { get; set; } = new List<ExerciseDetail>();
    }
}
