import React from 'react';
import { View, ImageBackground, Button, useWindowDimensions } from 'react-native';
import { logout } from "../services/auth.services";

const image = {uri: 'https://img.cybercook.com.br/receitas/141/pamonha.jpeg'}

export function PamonhaPage({ navigation }) {

    const {height, width} = useWindowDimensions();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground source={image} resizeMode="cover" style={{
                height: height + 40,
                width: width,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button title='Logout' onPress={() => logout().then(() => navigation.navigate("Login"))}></Button>
            </ImageBackground>
        </View>
    );
}