import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
  } from 'react-native';
import { Input, Button, FormControl, WarningOutlineIcon } from 'native-base';
import { Card } from './Card';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export function InputEmailCard({setValue, handleNext, handleGoToLogin}) {

    const [email, setEmail] = React.useState(null);
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = function(value) {
        if (value.trim().length === 0) {
            setIsInvalid(true);
            setErrorMessage('O email não pode estar em branco.');
            setEmail(null);
        } else if (!regexEmail.test(value.trim())) {
            setIsInvalid(true);
            setErrorMessage('Padrão de email inválido. ex: email@dominio.com');
            setEmail(null);
        }
         else {
            setIsInvalid(false);
            setErrorMessage(null);
            setEmail(value);
        }
    }

    const handleOnPress = function() {
        if (email == null || email.trim().length === 0) {
            setIsInvalid(true);
            setErrorMessage('O email não pode estar em branco.');
            setEmail(null);
        } else if (!regexEmail.test(email.trim())) {
            setIsInvalid(true);
            setErrorMessage('Padrão de email inválido. ex: email@dominio.com');
            setEmail(null);
        }
        else {
            setValue(email.trim());
            handleNext();
        }
    }

    return (
        <Card>
            <MaterialCommunityIcons name="at" size={48} color="#ff4444" marginTop={40}/>
            <Text style={styles.cardTitle} marginTop={20}>Qual é o seu email?</Text>
            <FormControl isInvalid={isInvalid} w={'75%'} style={{marginTop: 35, height: 80}}>
                <Input placeholder='Email' color='#ffffff' onChangeText={(value) => handleChange(value)}/>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errorMessage}</FormControl.ErrorMessage>
            </FormControl>
            <Button w='60%' variant='outline' borderColor='primary.400' _text={styles.confirmButtonText}
                onPress={handleOnPress}>Confirmar</Button>
            <TouchableWithoutFeedback onPress={handleGoToLogin}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.cardHasAccountText}>Já tem uma conta?</Text>
                    <Text style={styles.cardLoginText}>Login</Text>
                </View>
            </TouchableWithoutFeedback>
        </Card>
    );
}

const styles = StyleSheet.create({
    confirmButtonText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16
    },
    cardTitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff',
    },
    cardHasAccountText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#C0C0C0',
        marginTop: 18
    },
    cardLoginText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#1C7793',
        marginTop: 18,
        marginLeft: 3
    },
});