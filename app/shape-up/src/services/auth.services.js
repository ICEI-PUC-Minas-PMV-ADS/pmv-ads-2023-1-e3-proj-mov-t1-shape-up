import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { storeImage } from './imagestore.services';

export const register = async (name, username, password, imageData) => {

  var passHashed = CryptoJS.SHA1(password);
  var isAuthenticated = false;

  await axios.post('https://shape-up-backend-api.onrender.com/v1/auth/register', {
    'name': name.toString(),
    'username': username.toString(),
    'password': passHashed.toString(),
    'imageData': imageData.toString()
  })
  .then(function (response) {

    const data = response.data;

    if (data.isAuthenticated) {
        AsyncStorage.setItem('ShapeUp:Token', data.token);
        AsyncStorage.setItem('ShapeUp:RefreshToken', data.refreshToken);
        AsyncStorage.setItem('ShapeUp:UserName', data.name);
        AsyncStorage.setItem('ShapeUp:UserEmail', data.username);
        
        storeImage(data.imageData);
        
        isAuthenticated = true;
    }
  })
  .catch(function (error) {
      if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
      } else if (error.request) {

        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
  });

  return isAuthenticated;
};

export const login = async (username, password) => {

  console.log('Fazendo login');

    var passHashed = CryptoJS.SHA1(password);
    var isAuthenticated = false;

    await axios.post('https://shape-up-backend-api.onrender.com/v1/auth/login', {
            'username': username.toString(),
            'password': passHashed.toString()
    })
    .then(function (response) {

        var data = response.data;

        if (data.isAuthenticated) {
            AsyncStorage.setItem('ShapeUp:Token', data.token);
            AsyncStorage.setItem('ShapeUp:RefreshToken', data.refreshToken);
            AsyncStorage.setItem('ShapeUp:UserName', data.name);
            AsyncStorage.setItem('ShapeUp:UserEmail', data.username);
          
            storeImage(data.imageData);

            isAuthenticated = true;
        }
    })
    .catch(function (error) {
        if (error.response) {
          console.log(error.response.status);
        } else if (error.request) {

          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });

    return isAuthenticated;
};

export const logout = async () => {

    console.log('Fazendo logout');

    AsyncStorage.removeItem('ShapeUp:Token');
    AsyncStorage.removeItem('ShapeUp:RefreshToken');
    AsyncStorage.removeItem('ShapeUp:UserName');
    AsyncStorage.removeItem('ShapeUp:UserEmail');
};

export const isAuthenticated = async() => {

    const token = await AsyncStorage.getItem('ShapeUp:Token');
    const username =  await AsyncStorage.getItem('ShapeUp:UserEmail');

    if (token == null || username == null) {
        return false;
    }

    var isAuthenticated = false;

    await axios.post('https://shape-up-backend-api.onrender.com/v1/auth/token/check', {
            'token': token.toString(),
            'username': username.toString()
    })
    .then(function (response) {
      isAuthenticated = response.data.isValid;
    })
    .catch(function (error) {

      });

    return isAuthenticated;
};

export const refreshToken = async(token, refreshToken) => {

};