import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
  } from 'react-native';
  import { Button } from 'native-base';
  import Carousel, { Pagination } from 'react-native-snap-carousel';
  import { InputEmailCard } from '../components/InputEmailCard';
  import { InputNameCard } from '../components/InputNameCard';
  import { InputImageCard } from '../components/InputImageCard';
  import { InputPasswordCard } from '../components/InputPasswordCard';
  import { register } from '../services/auth.services';

  export function CadastrePage({navigation}) {

    const carousel = React.useRef(null)
    const {height, width} = useWindowDimensions();
    const [index, setIndex] = React.useState(0);


    // forms

    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [imageData, setImageData] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const handleBack = function() {
        if (index == 0) {
            handleGoToLogin();
        } else {
            carousel.current._snapToItem(carousel.current._getPositionIndex(index - 1));
        } 
    }

    const handleNext = function() {
        carousel.current._snapToItem(carousel.current._getPositionIndex(index + 1));
    }

    const handleGoToLogin = function() {
        navigation.navigate('Login');
    }

    const renderCarouselItems = function({item, index}) {
        switch(index) {
            case 0:
                return (<InputNameCard setValue={setName} handleNext={handleNext} handleGoToLogin={handleGoToLogin}></InputNameCard>);
            case 1:
                return (<InputEmailCard setValue={setEmail} handleNext={handleNext} handleGoToLogin={handleGoToLogin}></InputEmailCard>);
            case 2:
                return (<InputImageCard setValue={setImageData} handleNext={handleNext} handleGoToLogin={handleGoToLogin}></InputImageCard>);
            case 3:
                return (<InputPasswordCard setValue={setPassword} handleNext={handleCreateAccount} handleGoToLogin={handleGoToLogin}></InputPasswordCard>);
        }
    }

    const handleCreateAccount = function() {

        register(name, email, password, imageData)
            .then(function(response) {

                if (response.isAuthenticated) {
                    navigation.push('Welcome');
                } else {
                    alert(response.responseMessage);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
    <View style={styles.inner}>
        <ImageBackground source={require('../../assets/imgs/cadastre-page-background.jpg')}  resizeMode="cover" style={{
                height: height + 40,
                width: width
            }}>
                <Image style={styles.logo} resizeMode='contain' source={require('../../assets/imgs/logomarca.png')}></Image>     

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={{height: 350,}}>
                            <Carousel
                                data={[0,1,2,3]}
                                sliderWidth={390}
                                ref={carousel}
                                itemWidth={390}
                                useScrollView={false}
                                scrollEnabled={false}
                                onSnapToItem={(index) => setIndex(index)}
                                renderItem={renderCarouselItems}/>
                        </View>

                        <View style={styles.bottomNavContainer}>
                            <Button style={styles.bottomNavItem} _text={styles.bottomNavItemText} onPress={handleBack}>Voltar</Button>
                            <Button isDisabled={index == 2 ? false : true} style={styles.bottomNavItem} _text={styles.bottomNavItemText} onPress={handleNext}>Pular</Button>
                        </View>

                        <Pagination
                            style={{borderColor: 'black', borderWidth: 2}}
                            dotsLength={4}
                            activeDotIndex={index}
                            carouselRef={carousel}
                            dotStyle={styles.dotStyle}
                            tappableDots={true}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}/>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#ff4444',
        marginHorizontal: 0,
        backgroundColor: '#ff4444'
    },
    logo: {
        width: 300,
        height: 150,
        alignSelf: 'center',
        marginTop: 50
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
    }
  });