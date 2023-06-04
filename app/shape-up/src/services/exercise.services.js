import axios from 'axios';

const WEBAPI_EXERCISE_GET = 'https://shape-up-backend-api.onrender.com/v1/training/exercise/all';

export async function getExercises() {

    let exercises = null;
    
    await axios.get(WEBAPI_EXERCISE_GET)
    .then(function(response) {
        exercises = response.data;
    })
    .catch(function(error) {
        console.error(error);
    });

    return exercises;
}