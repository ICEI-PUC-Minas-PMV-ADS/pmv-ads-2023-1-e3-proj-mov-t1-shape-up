import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
  } from 'react-native';
import { Icon, Input, Button, Pressable, FormControl, WarningOutlineIcon } from 'native-base';
import { Card } from './Card';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from "@expo/vector-icons";

export function InputPasswordCard({setValue, handleNext, handleGoToLogin}) {

    const [show, setShow] = React.useState(false);
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [rePassword, setRePassword] = React.useState(null);

    const regexMaiuscula = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    const handleChangePassword = function(value) {
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
            setPassword();
        }
    }

    const handleChangeRePassword = function(value) {
        if (isInvalid) {
            return;
        }
        else if (value != password) {
            setIsInvalid(true);
            setErrorMessage('As senhas não são iguais.');
        }
        else {
            setIsInvalid(false);
            setErrorMessage(null);
            setRePassword();
        }
    }

    const handleOnPress = function() {
        if (isInvalid) {
            return;
        } else if (password == null) {
            setIsInvalid(true);
            setErrorMessage('É necessário informar a senha.');
        } 
        else if (rePassword == null) {
            setIsInvalid(true);
            setErrorMessage('É necessário confirmar a senha.');
        } else {
            setIsInvalid(false);
            setErrorMessage(null);
            setValue(password);
        }
    }

    return (
        <Card>
            <MaterialCommunityIcons name="lock" size={48} color="#ff4444" marginTop={10}/>
            <Text marginTop={3} style={styles.cardTitle}>Digite sua senha</Text>
            <View style={{ width: '80%', height: 100, justifyContent: "space-between", marginTop: 15, marginBottom: 10}}>
                <FormControl isInvalid={isInvalid} style={{height: 60}}>
                    <Input onChangeText={handleChangePassword} color='light.50' type={show ? "text" : "password"} InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>}  placeholder="Senha"/>
                </FormControl>
                <FormControl isInvalid={isInvalid} style={{ height: 80}}>
                    <Input onChangeText={handleChangeRePassword} color='light.50' type={show ? "text" : "password"} InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>}  placeholder="Confirmar Senha"/>   
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errorMessage}</FormControl.ErrorMessage>
                </FormControl>                                             
            </View>
            <Button w='60%' variant='outline' marginTop={9} borderColor='#ff4444' _text={{fontWeight: 'bold', fontSize: 16, fontFamily: 'Roboto'}}
                onPress={handleOnPress}>Criar conta</Button>
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