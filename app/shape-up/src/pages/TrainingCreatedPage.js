import React, { useContext } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Dimensions } from 'react-native';
import { Box, Text, Button, Center } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import LogoMarca from '../Components/LogoMarca';
import Card from '../Components/Card';
import Dumbbell from '../Components/icons/Dumbbell';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageBackground = require('../../assets/imgs/welcome-page-background.jpg');

export default function TrainingCreatedPage({navigation}) {

    const { setIsSignedIn } = useContext(AuthContext);

    function handleButton() {
        setIsSignedIn(true);
    }

    return (
        <ImageBackground source={imageBackground} resizeMode='cover' style={styles.imageBackground}>
            <LogoMarca style={styles.logo}></LogoMarca>
            <Center style={styles.container}>
                <Card>
                    <LinearGradient
                        style={styles.gradient}
	                    colors={['#ff4444','#2e2e2e']}
                        start={{x:-.2,y:-3}}
                        end={{x:.5,y:.6}}>
                        <Dumbbell style={styles.icon}></Dumbbell>
                        <Text style={styles.messageText}>Treino gerado com sucesso</Text>
                        <Button variant='outline' style={styles.button} _text={styles.buttonText} onPress={handleButton}>Visualizar</Button>
                    </LinearGradient>
                </Card>
            </Center>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        height: screenHeight + 40,
        width: screenWidth
    },
    logo: {
        width: 300,
        height: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    container: {
        flex: 1
    },
    gradient: {
        borderRadius: 20,
        height: '100%',
        width: '100%',
        flex: 0,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        marginTop: 50
    },
    messageText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 10,
    },
    button: {
        width: '80%',
        marginBottom: 40,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Roboto'
    }
});