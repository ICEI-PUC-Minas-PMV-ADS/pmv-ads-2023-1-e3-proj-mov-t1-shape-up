using Microsoft.AspNetCore.Http;
using ShapeUpBackendApi.Training.Models;

namespace ShapeUpBackendApi.Training.Services {
    public enum Goal {
        MuscleGain,
        WeightLoss
    }

    public enum TrainingExp {
        LossThanOneMonth,
        LossThanOneYear,
        MoreThanOneYear
    }

    public enum Timeline {
        OneYear,
        ThreeYears,
        Undefined
    }

    public class TrainingGeneratorService {
        public IEnumerable<Workout> GetWorkouts(string username, Goal goal, TrainingExp trainingExp, Timeline timeline) {
            switch(goal) {
                case Goal.MuscleGain: return CreateHypertrophyBeginnerTraining(username);
                case Goal.WeightLoss: return CreateReductionTraining(username);
                default: throw new Exception("Invalid Goal option");
            }
        }
        private IEnumerable<Workout> CreateHypertrophyBeginnerTraining(string username) {

            MemoryStream memoryStream = new MemoryStream();
            FileStream file = File.OpenRead("../../Assets/training.jpg");
            file.CopyTo(memoryStream);
            string base64Data = Convert.ToBase64String(memoryStream.ToArray());
            string imageData = string.Format("data:image/jpg;base64, {0}", base64Data);

            yield return CreateWorkout("Treino Peito e Ombro", username, imageData, new List<ExerciseDetail> {
                CreateExerciseDetail("b63c02d6-ae4a-4215-a7ea-f223828314be", 15, 3, 60),
                CreateExerciseDetail("8e8a00d2-8709-4f15-b875-0960ea881c49", 12, 4, 60),
                CreateExerciseDetail("f11e9d73-3c05-4f8e-8a85-ae0eebe75cc5", 10, 4, 60),
                CreateExerciseDetail("8d76c638-4f63-4ca1-86c6-d5e89ba0e8fc", 12, 4, 60),
                CreateExerciseDetail("22050d87-57f3-4adb-b1b9-f8cb4b7a9b9f", 10, 4, 60),
                CreateExerciseDetail("533f3278-a88a-4efd-8c4d-4b13b3158a64", 10, 4, 60),
                CreateExerciseDetail("36ea1636-2b11-4333-9aa9-99ae1969d20e", 10, 4, 60)
            });

            yield return CreateWorkout("Treino Posterior e Glúteo", username, imageData, new List<ExerciseDetail> {
                CreateExerciseDetail("4a3200a4-a8ee-4611-9bc4-571471735a34", 20, 4, 60),
                CreateExerciseDetail("addf0116-2cfe-42ef-a5ca-b225bffbf31d", 10, 4, 60),
                CreateExerciseDetail("795c51bb-99f1-4744-855b-2b79d051ca30", 10, 4, 60),
                CreateExerciseDetail("038704a9-08af-4ac5-8c4a-7190789d7e50", 12, 3, 60),
            });

            yield return CreateWorkout("Treino Perna", username, imageData, new List<ExerciseDetail> {
                CreateExerciseDetail("03c2d112-976f-4b4b-b523-d31d46f3f89f", 20, 7, 60),
                CreateExerciseDetail("0b6a2198-b2b6-4a6c-9266-fcaf58a78901", 10, 4, 60),
                CreateExerciseDetail("f06d7db7-56e3-4db7-b190-b6497863d0e2", 20, 4, 60),
            });

            yield return CreateWorkout("Treino Costas e Ombro", username, imageData, new List<ExerciseDetail> {
                CreateExerciseDetail("581f845a-37c6-4d4a-85f4-040898ef31b9", 15, 3, 60),
                CreateExerciseDetail("b63c02d6-ae4a-4215-a7ea-f223828314be", 15, 2, 60),
                CreateExerciseDetail("2652dfe7-de40-49d7-bc57-9607dc9e6496", 10, 4, 60),
                CreateExerciseDetail("a3598a4f-a840-432c-b09b-fc6645ffa77f", 10, 4, 60),
                CreateExerciseDetail("a4636467-5cab-42a4-9c87-18148e94087e", 12, 4, 60),
                CreateExerciseDetail("243e8a64-e1d4-4f45-98cb-1fc61e19d1da", 10, 4, 60),
                CreateExerciseDetail("0077b252-07f8-4c30-bfc8-dfffebcfc349", 12, 3, 60),
            });

            yield return CreateWorkout("Treino Braços e Abdômen", username, imageData, new List<ExerciseDetail> {
                CreateExerciseDetail("a3e2efef-ed73-4ece-becc-1c82bab8726b", 15, 3, 60),
                CreateExerciseDetail("dd73543f-1480-47d4-a022-69ecb9e49abb", 10, 4, 60),
                CreateExerciseDetail("e25054c2-7269-4e09-a453-e7a50eca5fd0", 10, 4, 60),
                CreateExerciseDetail("97ebb769-235b-4835-96cf-8f9d51c7df26", 10, 4, 60),
                CreateExerciseDetail("7a2b5c1f-a2bf-49d1-9b39-006082081810", 10, 3, 60),
                CreateExerciseDetail("9638a5b2-a412-4e7e-812a-9cb459177873", 10, 4, 60),
                CreateExerciseDetail("c0c4e1e7-1b53-4e3b-b50b-751c00eb2ab4", 12, 4, 60),
            });
        }
        private IEnumerable<Workout> CreateReductionTraining(string username) {

            MemoryStream memoryStream = new MemoryStream();
            FileStream file = File.OpenRead("../../Assets/training.jpg");
            file.CopyTo(memoryStream);
            string base64Data = Convert.ToBase64String(memoryStream.ToArray());
            string imageData = string.Format("data:image/jpg;base64, {0}", base64Data);

            yield return CreateWorkout("Treino Superior", username, imageData, new List<ExerciseDetail> {
                CreateExerciseDetail("b71b8a55-b166-4470-8549-fd5e999b732e", 20, 2, 60),
                CreateExerciseDetail("b63c02d6-ae4a-4215-a7ea-f223828314be", 15, 2, 60),
                CreateExerciseDetail("60db96bc-22c4-4752-a5eb-481cacad4c7b", 10, 3, 60),
                CreateExerciseDetail("2af1ec88-ef0f-4e50-9f14-24fb3ff6404c", 10, 3, 60),
                CreateExerciseDetail("3fd1b189-d8d7-438d-9037-052a4c5d17c5", 10, 4, 60),
                CreateExerciseDetail("9b54298f-4a09-44c2-9a24-c77ea1877b2b", 15, 4, 60),
                CreateExerciseDetail("78231c2d-95e8-47dc-b6c3-c3a314839ee7", 10, 4, 60),
            });

            yield return CreateWorkout("Treino Inferior", username, imageData, new List<ExerciseDetail> {
                CreateExerciseDetail("ef3f8201-67b2-4970-813b-b71975e7a28b", 25, 2, 60),
                CreateExerciseDetail("03c2d112-976f-4b4b-b523-d31d46f3f89f", 10, 3, 60),
                CreateExerciseDetail("0b6a2198-b2b6-4a6c-9266-fcaf58a78901", 2, 4, 60),
                CreateExerciseDetail("588060cf-24ca-473b-adea-c4af7436e098", 50, 3, 60),
                CreateExerciseDetail("d7072744-d850-40a5-bb16-13f3be38c5c7", 10, 3, 60),
            });
        }
        private ExerciseDetail CreateExerciseDetail(string exerciseId, int reps, int series, double restTime) {
            return new ExerciseDetail {
                ExerciseId = Guid.Parse(exerciseId),
                Reps = reps,
                Series = series,
                RestTime = restTime
            };
        }
        private Workout CreateWorkout(string name, string username, string imageData, List<ExerciseDetail> exercises) {
            return new Workout {
                Name = name,
                Username = username,
                ImageData = imageData,
                Exercises = exercises
            };
        }
    }
}
