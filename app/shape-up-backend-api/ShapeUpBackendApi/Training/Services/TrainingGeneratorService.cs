using ShapeUpBackendApi.Training.Models;

namespace ShapeUpBackendApi.Training.Services {
    public enum Goal {
        MuscleGain,
        WeightLoss,
        Hypertrophy
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
            return null;
        }

        private static List<Workout> HypertrophyBeginner = new List<Workout> {
            new Workout {

            },
            new Workout {

            },
            new Workout {

            },
            new Workout {

            },
            new Workout {

            },
        };
    }
}
