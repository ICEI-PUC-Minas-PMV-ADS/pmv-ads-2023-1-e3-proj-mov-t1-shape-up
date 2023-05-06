import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export const register = async (name, username, password, imageData) => {

  var passHashed = CryptoJS.SHA1(password);
  const formData = new FormData();
  formData.append('imagem', imagemInput.files[0]);

  await axios.post('https://shape-up-backend-api.onrender.com/v1/auth/login', {
    'name': name.toString(),
    'username': username.toString(),
    'password': passHashed.toString(),
    'imageData': imageData.toString()
  })
  .then(function (response) {

    var json = JSON.parse(response.data);

    if (json.isAuthenticated) {
        AsyncStorage.setItem('ShapeUp:Token', json.token);
        AsyncStorage.setItem('ShapeUp:RefreshToken', json.refreshToken);
        AsyncStorage.setItem('ShapeUp:UserName', json.name);
        AsyncStorage.setItem('ShapeUp:UserEmail', json.username);
        AsyncStorage.setItem('ShapeUp:UserImage', json.imageData);

        return true;
    } else {
        return false;
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
};

export const login = async (username, password) => {

    var passHashed = CryptoJS.SHA1(password);

    await axios.post('https://shape-up-backend-api.onrender.com/v1/auth/login', {
            'username': username.toString(),
            'password': passHashed.toString()
    })
    .then(function (response) {

        var json = JSON.parse(response.data);

        if (json.isAuthenticated) {
            AsyncStorage.setItem('ShapeUp:Token', json.token);
            AsyncStorage.setItem('ShapeUp:RefreshToken', json.refreshToken);
            AsyncStorage.setItem('ShapeUp:UserName', json.name);
            AsyncStorage.setItem('ShapeUp:UserEmail', json.username);
            AsyncStorage.setItem('ShapeUp:UserImage', json.imageData);

            return true;
        } else {
            return false;
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
};

export const logout = async () => {
    AsyncStorage.removeItem('ShapeUp:Token');
    AsyncStorage.removeItem('ShapeUp:RefreshToken');
    AsyncStorage.removeItem('ShapeUp:UserName');
    AsyncStorage.removeItem('ShapeUp:UserEmail');
    AsyncStorage.removeItem('ShapeUp:UserImage');
};

export const isAuthenticated = async() => {

    let token = AsyncStorage.getItem('ShapeUp:Token');
    let username =  AsyncStorage.getItem('ShapeUp:UserEmail');

    if (!token || !username) {
        return false;
    }

    await axios.post('https://shape-up-backend-api.onrender.com/v1/auth/token/check', {
            'token': token.toString(),
            'username': username.toString()
    })
    .then(function (response) {
        return JSON.parse(response.data).isValid;
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
};

export const refreshToken = async(token, refreshToken) => {

};