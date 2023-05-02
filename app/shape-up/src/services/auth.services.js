import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const register = async (name, username, password) => {
};

export const login = async (username, password) => {
};

export const logout = async () => {
};

export const isAuthenticate = async() => {

    let token = AsyncStorage.getItem('ShapeUp:Token');
    let username =  AsyncStorage.getItem('ShapeUp:LastUserEmail');

    var response = await axios.post('http://localhost:44389/v1/auth/check', {
            'token': token,
            'username': username
    });

    console.log(response.status);
};

export const refreshToken = async(token, refreshToken) => {

};