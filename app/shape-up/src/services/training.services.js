import axios from 'axios';
import { getUserEmail } from './userdata.services';

const WEBAPI_TRAINING_GENERATE = 'https://shape-up-backend-api.onrender.com/v1/training/workout/generate';
const WEBAPI_TRAINING_GET = 'https://shape-up-backend-api.onrender.com/v1/training/workout/getbyusername';

export async function generate(goal, trainingExp, timeline) {

    const username = await getUserEmail();
    let trainingGerated = false;

    await axios.post(WEBAPI_TRAINING_GENERATE, {
        "username": username,
        "goal": goal,
        "trainingExp": trainingExp,
        "timeline": timeline
    })
    .then(function(response) {
        trainingGerated = true;
    })
    .catch(function(error) {
        console.error(error);
    });

    return trainingGerated;
}

export async function getTraining() {

    const username = await getUserEmail();
    let training = null;
    
    await axios.get(WEBAPI_TRAINING_GET + `?username=${username}`)
    .then(function(response) {
        training = response.data;
    })
    .catch(function(error) {
        console.error(error);
    });

    return training;
}