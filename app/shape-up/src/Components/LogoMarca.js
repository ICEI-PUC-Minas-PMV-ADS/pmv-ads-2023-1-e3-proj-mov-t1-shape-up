import React from 'react';
import { Image, StyleSheet } from 'react-native';

const logo = require('../../assets/imgs/logomarca.png');

export default function LogoMarca({style}) {
    return (
        <Image style={{...styles.logo, ...style}} resizeMode='contain' source={logo}></Image>     
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 150,
        alignSelf: 'center',
    }
});