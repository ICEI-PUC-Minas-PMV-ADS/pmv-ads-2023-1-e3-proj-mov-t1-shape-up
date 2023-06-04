import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard } from 'react-native';
import { Stack, Input, FormControl, Box, WarningOutlineIcon, Pressable, Icon, Button, Flex, Divider, Text } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import LogoMarca from '../Components/LogoMarca';
import { Platform } from 'expo-modules-core';
import { MaterialIcons } from "@expo/vector-icons";
import { login } from '../services/auth.services';
import AuthContext from '../contexts/AuthContext';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const backgroundImage = require('../../assets/imgs/login-page-background.jpg');

export default function LoginPage({navigation}) {

    const [showPass, setShowPass] = React.useState(false);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [waitingResponse, setWaitingResponse] = React.useState(false);

    const { setIsSignedIn } = useContext(AuthContext);

    function handlePasswordInput(input) {
        setIsInvalid(false);
        setPassword(input);
    }

    function handleEmailInput(input) {
        setIsInvalid(false);
        setEmail(input);
    }

    function handleLogin() {
        setWaitingResponse(true);

        login(email, password)
            .then(function(response) {
                if (response.isAuthenticated) {
                    setIsSignedIn(true);
                } else {
                    setErrorMessage(response.responseMessage);
                    setIsInvalid(true);
                }

                setWaitingResponse(false)
            })
            .catch(function(error) {
                console.error(error);
                setWaitingResponse(false)
            });
    }

    function handleCadastre() {
        navigation.navigate('Cadastre');
    }

    return (
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <LinearGradient
                style={styles.gradient}
                colors={['#ff4444','#000000']}
                start={{x:0,y:0}}
                end={{x:0.1,y:1}}>
                <LogoMarca style={styles.logo}></LogoMarca>
            </LinearGradient>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.touchableArea}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.touchableArea}>
                    <Box style={styles.container}>
                        <Stack space={4} w="75%" alignItems="center">
                            <FormControl isInvalid={isInvalid} style={styles.form}>
                                <Input style={styles.input} _focus={styles.inputFocus} placeholder="Email" mb={3} onChangeText={handleEmailInput}/>
                                <Input style={styles.input} _focus={styles.inputFocus} placeholder="Password" mb={3} onChangeText={handlePasswordInput} type={showPass ? "text" : "password"} InputRightElement={
                                    <Pressable onPress={function() {setShowPass(!showPass)}}>
                                        <Icon as={<MaterialIcons name={showPass ? "visibility" : "visibility-off"}/>} size={5} mr='2' color='muted.400'/>
                                    </Pressable>
                                }/>
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs'/>}>{errorMessage}</FormControl.ErrorMessage>
                            </FormControl>
                            <Button w='100%' mt='3' isDisabled={waitingResponse} onPress={handleLogin}>Login</Button>
                            <Flex direction="row" alignItems='center' justifyContent='center' pr='3' pl='3'>
                                <Divider bg='muted.300' w='40%' thickness="2" orientation="horizontal" />
                                <Text style={styles.dividerText}>or</Text>
                                <Divider bg='muted.300' w='40%' thickness="2" orientation="horizontal" />
                            </Flex>
                            <Button w='100%' variant='outline' isDisabled={waitingResponse} onPress={handleCadastre}>Cadastre</Button>
                        </Stack>
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
    backgroundImage: {
        width: screenWidth,
        height: screenHeight + 40
    },
    gradient: {
        height: 220,
        width: '100%'
    },
    logo: {
        marginTop: 50
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dividerText: {
        color: '#dedede',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 18
    },
    form: {
        height: 120
    },
    input: {
        color: '#fff'
    },
    inputFocus: {
        borderColor: '#fca5a5',
        selectionColor: "#ef4444",
        background: "#fca5a5"
    }
});