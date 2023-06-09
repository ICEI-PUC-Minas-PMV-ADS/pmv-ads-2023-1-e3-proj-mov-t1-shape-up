import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons'; 
import { Text, Box, FormControl, Icon, Input, Button, Pressable, WarningOutlineIcon  } from 'native-base';
import Card from './Card';

export default function InputPasswordCard({setValue, handleNext, handleGoToLogin}) {

    const [show, setShow] = React.useState(false);
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("Error");
    const [password, setPassword] = React.useState(null);

    const regexMaiuscula = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    function handleChangeInput(value) {
        if (value.length < 8) {
            setIsInvalid(true);
            setErrorMessage('A senha precisa ter no mínimo 8 caracteres.')
        }
        else if (!regexMaiuscula.test(value)) {
            setIsInvalid(true);
            setErrorMessage('A senha precisa ter no mínimo uma letra maiúscula.')
        }
        else if (!regexEspecial.test(value)) {
            setIsInvalid(true);
            setErrorMessage('A senha precisa ter no mínimo um caracter especial.')
        } else {
            setIsInvalid(false);
            setErrorMessage(null);
        }

        setPassword(value);
        setValue(value);
    }

    function handleConfirm() {
        if (isInvalid) {
            return;
        } else if (password == null) {
            setIsInvalid(true);
            setErrorMessage('É necessário informar a senha.');
        } 
        else {
            setIsInvalid(false);
            setErrorMessage(null);
            handleNext();
        }
    }

    return (
        <Card>
            
            <MaterialCommunityIcons name="lock" size={48} color="#ff4444" marginTop={20}/>
            <Text style={styles.cardTitle}>Digite sua senha</Text>

            <FormControl isInvalid={isInvalid} style={styles.form}>
                <Input onChangeText={handleChangeInput} style={styles.input} _focus={styles.inputFocus} type={show ? "text" : "password"} InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                        <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>}  placeholder="Senha"/>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errorMessage}</FormControl.ErrorMessage>
            </FormControl>    

            <Button variant='outline' style={styles.confirmButton} _text={styles.confirmButtonText} onPress={handleConfirm}>Confirmar</Button>
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
    form: {
        width: '75%'
    },
    confirmButton: {
        width: '60%',
        borderColor: '#ff4444'
    },
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
    },
    cardLoginText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#1C7793',
        marginLeft: 3
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 20
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