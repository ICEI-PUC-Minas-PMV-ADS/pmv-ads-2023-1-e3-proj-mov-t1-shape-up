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

export function InputNameCard({setValue, handleNext, handleGoToLogin}) {

    const [name, setName] = React.useState(null);
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const handleChange = function(value) {
        if (value.trim().length === 0) {
            setIsInvalid(true);
            setErrorMessage('O nome não pode estar em branco.');
            setName(null);
        } else {
            setIsInvalid(false);
            setErrorMessage(null);
            setName(value);
        }
    }

    const handleOnPress = function() {
        if (name == null || name.trim().length === 0) {
            setIsInvalid(true);
            setErrorMessage('O nome não pode estar em branco.');
        } else {
            setValue(name.trim());
            handleNext();
        }
    }

    return (
        <Card>
            <MaterialCommunityIcons name="account" size={48} color="#ff4444" marginTop={40}/>
            <Text style={styles.cardTitle} marginTop={20}>Qual é o seu nome?</Text>
            <FormControl isInvalid={isInvalid} w={'75%'} style={{marginTop: 35, height: 80}}>
                <Input placeholder='Nome' color='#ffffff' onChangeText={(text) => handleChange(text)}/>
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