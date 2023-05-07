import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

const USER_NAME_KEY = 'ShapeUp:UserName';
const USER_EMAIL_KEY = 'ShapeUp:UserEmail';
const TOKEN_KEY = 'ShapeUp:Token';
const REFRESH_TOKEN_KEY = 'ShapeUp:RefreshToken';

export async function setUserName(userName) {
    await AsyncStorage.setItem(USER_NAME_KEY, userName)
        .catch(function(error) {
            console.error(error);
        });
}

export async function getUserName() {
    let userName = undefined;

    await AsyncStorage.getItem(USER_NAME_KEY)
        .then(function(value) {
            userName = value;
        })
        .catch(function(error) {
            console.error(error);
        })

    return userName;
}

export async function setUserEmail(userEmail) {
    await AsyncStorage.setItem(USER_EMAIL_KEY, userEmail)
        .catch(function(error) {
            console.error(error);
        });
}

export async function getUserEmail() {
    let userEmail = undefined;

    await AsyncStorage.getItem(USER_EMAIL_KEY)
        .then(function(value) {
            userEmail = value;
        })
        .catch(function(error) {
            console.error(error);
        })

    return userEmail;
}

export async function setToken(token) {
    await AsyncStorage.setItem(TOKEN_KEY, token)
        .catch(function(error) {
            console.error(error);
        })
}

export async function getToken() {
    let token = undefined;

    await AsyncStorage.getItem(TOKEN_KEY)
        .then(function(value) {
            token = value;
        })
        .catch(function(error) {
            console.error(error);
        });

    return token;
}

export async function setRefreshToken(refreshToken) {
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
        .catch(function(error) {
            console.error(error);
        })
}

export async function getRefreshToken() {

    let refreshToken = undefined;

    await AsyncStorage.getItem(REFRESH_TOKEN_KEY, refreshToken)
        .then(function(value) {
            refreshToken = value;
        })

    return refreshToken;
}

export async function saveImageProfile(imageData) {
    const username = await getUserEmail();
    const path = FileSystem.documentDirectory + `/${username}_profile_image.jpg`;

    await FileSystem.writeAsStringAsync(
        path,
        imageData.replace('data:image/jpeg;base64,', ''),
        { encoding: FileSystem.EncodingType.Base64 }
      ).catch(function(error) {
          console.error(error);
      });
}

export async function getImageProfile() {
    const username = await getUserEmail();
    const path = FileSystem.documentDirectory  + `${username}_profile_image.jpg`;
    const fileInfo = await FileSystem.getInfoAsync(path);

    if (!fileInfo.exists) {
        console.log('Arquivo não encontrado!');
        return;
    }

    const fileContent = await FileSystem.readAsStringAsync(path, {
        encoding: FileSystem.EncodingType.Base64,
    });

    return `data:image/jpeg;base64,${fileContent}`;
}