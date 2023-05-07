import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeImage(imageData) {

    const username = await AsyncStorage.getItem('ShapeUp:UserEmail');
    const path = FileSystem.documentDirectory + `/${username}_profile_image.jpg`;

    await FileSystem.writeAsStringAsync(
        path,
        imageData.replace('data:image/jpeg;base64,', ''),
        { encoding: FileSystem.EncodingType.Base64 }
      ).catch(function(error) {
          console.error(error);
      });
}   

export async function getUserProfileImage() {

    const username = await AsyncStorage.getItem('ShapeUp:UserEmail');
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