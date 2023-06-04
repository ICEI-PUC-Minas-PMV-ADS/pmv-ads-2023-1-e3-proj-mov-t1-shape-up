import {
  setUserName,
  setUserEmail,
  setToken,
  setRefreshToken,
  saveImageProfile,
  getToken,
  getUserEmail } from './userdata.services';
import CryptoJS from 'crypto-js';
import axios from 'axios';


const WEBAPI_AUTH_REGISTER_URL = 'https://shape-up-backend-api.onrender.com/v1/auth/register';
const WEBAPI_AUTH_LOGIN_URL = 'https://shape-up-backend-api.onrender.com/v1/auth/login';
const WEBAPI_AUTH_CHECK_URL = 'https://shape-up-backend-api.onrender.com/v1/auth/token/check';
const USER_EXISTS_CODE = 422;
const USER_NOT_EXISTS_CODE = 404;

export async function register(name, email, password, imageData) {
    
 const passwordHashed = CryptoJS.SHA1(password).toString();
 const registerResponse = {
     isAuthenticated: false,
     responseMessage: ''
 }

 await axios.post(WEBAPI_AUTH_REGISTER_URL, {
     'name': name,
     'username': email.toLowerCase(),
     'password': passwordHashed,
     'imageData': imageData ? imageData.toString() : ""
 })
 .then(function(response) {
     if (response.data.isAuthenticated) {
         registerResponse.isAuthenticated = response.data.isAuthenticated;
         registerResponse.responseMessage = 'Usuário cadastrado com sucesso';

         setUserName(response.data.name);
         setUserEmail(response.data.username);
         setToken(response.data.token);
         setRefreshToken(response.data.refreshToken);
         saveImageProfile(response.data.imageData);

     } else {
         registerResponse.isAuthenticated = response.data.isAuthenticated;
         registerResponse.responseMessage = 'Problemas ao fazer o cadastro';
     }
 })
 .catch(function(error) {
     if (error.response.status == USER_EXISTS_CODE) {
         registerResponse.isAuthenticated = false;
         registerResponse.responseMessage = 'Usuário já cadastrado';
     } else {
         console.error(error);
     }
 });

 return registerResponse;
}

export async function login(email, password) {

 const passwordHashed = CryptoJS.SHA1(password).toString();
 const loginResponse = {
     isAuthenticated: false,
     responseMessage: ''
 }

 await axios.post(WEBAPI_AUTH_LOGIN_URL, {
     'username': email.toLowerCase(),
     'password': passwordHashed
 })
 .then(function(response) {
     if (response.data.isAuthenticated) {
         loginResponse.isAuthenticated = response.data.isAuthenticated;
         loginResponse.responseMessage = 'Usuário logado com sucesso';

         setUserName(response.data.name);
         setUserEmail(response.data.username);
         setToken(response.data.token);
         setRefreshToken(response.data.refreshToken);
         saveImageProfile(response.data.imageData);

     } else {
         loginResponse.isAuthenticated = response.data.isAuthenticated;
         loginResponse.responseMessage = 'Problemas ao fazer o cadastro';
     }
 })
 .catch(function(error) {
     if (error.response.status == USER_NOT_EXISTS_CODE) {
         loginResponse.isAuthenticated = false;
         loginResponse.responseMessage = 'Usuário ou senha inválidos';
     } else {
         console.error(error);
     }
 });

 return loginResponse;
}

export async function logout() {
 setUserName('');
 setUserEmail('');
 setToken('');
 setRefreshToken('');
}

export async function isAuthenticated() {
 const token = await getToken();
 const username =  await getUserEmail();

 const isAuthenticatedResponse = {
     isAuthenticated: false
 }

 if (token == null || username == null) {
     return isAuthenticatedResponse;
 }

 await axios.post(WEBAPI_AUTH_CHECK_URL, {
     'token': token.toString(),
     'username': username.toString()
 })
 .then(function(response) {
    isAuthenticatedResponse.isAuthenticated = response.data.isValid;
 })
 .catch(function(error) {
    
 });

 return isAuthenticatedResponse;
}