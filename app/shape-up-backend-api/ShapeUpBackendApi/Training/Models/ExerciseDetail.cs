namespace ShapeUpBackendApi.Training.Models {
    public class ExerciseDetail {
        public Guid Id { get; set; }
        public Guid WorkoutId { get; set; }
        public Guid ExerciseId { get; set; }
        public Exercise? Exercise { get; set; }
        public int Reps { get; set; }
        public int Series { get; set; }
        public double RestTime { get; set; }
    }
}
