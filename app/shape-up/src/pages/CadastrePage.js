import React, { useRef, useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    StatusBar,
    Platform
} from 'react-native';
import { Box, Button } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LogoMarca from '../Components/LogoMarca';
import InputNameCard from '../Components/InputNameCard';
import InputEmailCard from '../Components/InputEmailCard';
import InputImageCard from '../Components/InputImageCard';
import InputPasswordCard from '../Components/InputPasswordCard';
import InputRePasswordCard from '../Components/InputRePasswordCard';
import { register } from '../services/auth.services';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageBackground = require('../../assets/imgs/cadastre-page-background.jpg');
const navigationBarHeight = StatusBar.currentHeight;

export default function CadastrePage({navigation}) {

    const carousel = useRef(null);
    const [index, setIndex] = React.useState(0);

    // forms

    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [imageData, setImageData] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    function handlePasswordCompare(value) {
        if (value == password) {
            return true;
        } else {
            return false;
        }
    }

    function handleNext() {
        carousel.current._snapToItem(carousel.current._getPositionIndex(index + 1));
    }

    function handleBack() {
        if (index == 0) {
            handleGoToLogin();
        } else {
            carousel.current._snapToItem(carousel.current._getPositionIndex(index - 1));
        }
    }

    function handleGoToLogin() {
        navigation.goBack();
    }

    function handleGoToWelcomePage() {
        register(name, email, password, imageData)
            .then(function(response) {

                if (response.isAuthenticated) {
                    navigation.push('Welcome');
                } else {
                    alert(response.responseMessage);
                    navigation.goBack();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function renderCarouselItems({item, index}) {
        switch(index) {
            case 0:
                return (<InputNameCard setValue={setName} handleNext={handleNext} handleGoToLogin={handleGoToLogin}></InputNameCard>);
            case 1:
                return (<InputEmailCard setValue={setEmail} handleNext={handleNext} handleGoToLogin={handleGoToLogin}></InputEmailCard>);
            case 2:
                return (<InputImageCard setValue={setImageData} handleNext={handleNext} handleGoToLogin={handleGoToLogin}></InputImageCard>);
            case 3:
                return (<InputPasswordCard setValue={setPassword} handleNext={handleNext} handleGoToLogin={handleGoToLogin}></InputPasswordCard>);
            case 4:
                return (<InputRePasswordCard passwordCompare={handlePasswordCompare} handleNext={handleGoToWelcomePage} handleGoToLogin={handleGoToLogin}></InputRePasswordCard>);
        }
    }

    return (
        <ImageBackground source={imageBackground} resizeMode='cover' style={styles.imageBackground}>
            <LogoMarca style={styles.logo}></LogoMarca>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.touchableArea}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.touchableArea}>
                    <Box style={styles.container}>
                        <Box style={styles.carouselContainer}>
                            <Carousel
                                data={[0,1,2,3,4]}
                                sliderWidth={screenWidth * .9}
                                ref={carousel}
                                itemWidth={screenWidth * .9}
                                useScrollView={false}
                                scrollEnabled={false}
                                onSnapToItem={(index) => setIndex(index)}
                                renderItem={renderCarouselItems}/>
                        </Box>
                        <Box style={styles.bottomNavContainer}>
                            <Button style={styles.bottomNavItem} _text={styles.bottomNavItemText} onPress={handleBack}>Voltar</Button>
                            <Button style={{...styles.bottomNavItem, display: index === 2 ? 'flex' : 'none'}} _text={styles.bottomNavItemText} onPress={handleNext}>Pular</Button>
                        </Box>  

                        <Pagination
                            style={{borderColor: 'black', borderWidth: 2, marginBottom: navigationBarHeight}}
                            dotsLength={5}
                            activeDotIndex={index}
                            carouselRef={carousel}
                            dotStyle={styles.dotStyle}
                            tappableDots={true}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}/>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    touchableArea: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        width: screenWidth,
        height: screenHeight + 40
    },
    logo: {
        marginTop: 50
    },
    content: {
        height: '100%'
    },
    container: {
        flex: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselContainer: {
        height: screenWidth * .8
    },
    bottomNavContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20
    },
    bottomNavItem: {
        backgroundColor: 'transparent',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0
    },
    bottomNavItemText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff4444'
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#ff4444',
        marginHorizontal: 0,
        backgroundColor: '#ff4444'
    }
});

