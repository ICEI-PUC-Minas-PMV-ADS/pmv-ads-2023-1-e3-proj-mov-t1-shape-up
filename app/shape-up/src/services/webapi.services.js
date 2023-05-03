import axios from 'axios';

export const API = axios.create({
    baseUrl: "https://shape-up-backend-api.onrender.com"
});