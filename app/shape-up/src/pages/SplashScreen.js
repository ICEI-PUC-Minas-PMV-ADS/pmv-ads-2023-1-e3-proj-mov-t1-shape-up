import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Box, Spinner } from 'native-base';
import LogoMarca from '../Components/LogoMarca';

export default function SplashScreen() {

    return (
        <Box style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                colors={['#ff4444', '#000']}
                start={{x: -1, y: -.9}}
                end={{x:.1, y:1}}>
                <LogoMarca style={styles.logo}></LogoMarca>
                <Spinner size={80}/>
            </LinearGradient>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    gradient: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 100
    }
});