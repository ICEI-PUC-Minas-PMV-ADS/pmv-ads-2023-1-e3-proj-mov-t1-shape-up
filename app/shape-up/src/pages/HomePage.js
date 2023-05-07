import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { Button, Avatar } from 'native-base';
import { logout } from '../services/auth.services';
import { getImageProfile, getUserName } from '../services/userdata.services';
import { CommonActions } from '@react-navigation/native';

export function HomePage({navigation}) {

    const [name, setName] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);

    React.useEffect(function() {
        getImageProfile().then((profileImage) => setImageUrl(profileImage));
        getUserName().then((userName) => setName(userName));
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <Avatar bg="transparent" marginTop={3} size={100} source={{uri: imageUrl}}></Avatar>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
            <Button onPress={() => {
                logout();
                
                navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [
                        { name: 'Home' },
                        { name: 'Login' },
                        { name: 'Welcome'}
                      ],
                    })
                  );

                navigation.navigate('Login');
            }}>Logout</Button>
        </View>
    );
}