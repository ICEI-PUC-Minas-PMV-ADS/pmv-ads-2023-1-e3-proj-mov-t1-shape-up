import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { Button, Avatar } from 'native-base';
import { logout } from '../services/auth.services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserProfileImage } from '../services/imagestore.services';

export function HomePage({navigation}) {

    const [name, setName] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);

    AsyncStorage.getItem('ShapeUp:UserName')
        .then((value) => {setName(value)})
        .catch((error) => {console.log(error)});
    getUserProfileImage()
    .then((value) => {
        setImageUrl(value);
    })
    .catch((error) => {console.log(error)});

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <Avatar bg="transparent" marginTop={3} size={100} source={{uri: imageUrl}}></Avatar>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
            <Button onPress={() => {
                logout();
                navigation.navigate('Login');
            }}>Logout</Button>
        </View>
    );
}