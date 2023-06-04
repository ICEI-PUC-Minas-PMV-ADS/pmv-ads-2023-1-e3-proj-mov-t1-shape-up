import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Input, Button, FormControl, WarningOutlineIcon, Text, Box } from 'native-base';
import Card from './Card';

export default function InputEmailCard({setValue, handleNext, handleGoToLogin}) {

    const [email, setEmail] = React.useState(null);
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("Error");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function handleInput(value) {
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

    function handleConfirm() {
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
            <MaterialCommunityIcons name="at" size={48} color="#ff4444" marginTop={20}/>
            <Text style={styles.cardTitle}>Qual é o seu email?</Text>
            <FormControl isInvalid={isInvalid} style={styles.form}>
                <Input style={styles.input} _focus={styles.inputFocus} placeholder='Nome' onChangeText={handleInput}/>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errorMessage}</FormControl.ErrorMessage>
            </FormControl>
            <Button w='60%' variant='outline' borderColor='primary.400' _text={styles.confirmButtonText} onPress={handleConfirm}>Confirmar</Button>
            <TouchableWithoutFeedback onPress={handleGoToLogin}>
                <Box style={styles.rowContainer}>
                    <Text style={styles.cardHasAccountText}>Já tem uma conta?</Text>
                    <Text style={styles.cardLoginText}>Login</Text>
                </Box>
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
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
    cardHasAccountText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#C0C0C0',
    },
    cardLoginText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#1C7793',
        marginLeft: 3
    },
    form: {
        width: '75%',
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