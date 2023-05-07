import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
  } from 'react-native';
import { Button, Avatar } from 'native-base';
import { Card } from './Card';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

export function InputImageCard({setValue, handleNext, handleGoToLogin}) {

    const [imageUri, setImageUri] = React.useState(null);
    const [imageData, setImageData] = React.useState(null);
    const [isUploaded, setIsUploaded] = React.useState(null);

    const handleSelectImage = () => {

        ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
          base64: true
        }).then(result => {
            if (!result.canceled) {
                if (result.uri != undefined) {
                    setImageUri(result.uri);
                    setImageData(`data:image/jpeg;base64,${result.base64}`)
                    setIsUploaded(true);
                }
            } else {
                alert('You did not select any image.');
                setImageUri(null);
                setIsUploaded(false);
            }
        })
    };

    const handleRemoveItem = function() {
        setImageUri(null);
        setIsUploaded(false);
    }

    const handleOnPress = function() {
        setValue(imageData);
        handleNext();
    }

    return (
        <Card>
            <View>
                <Avatar bg="transparent" marginTop={3} size={100} source={{uri: imageUri}}>
                    <MaterialCommunityIcons name="image-outline" size={48} color="#ff4444"/>
                </Avatar>
                
            </View>
            <Text marginTop={5} style={styles.cardTitle}>Carregar foto de perfil</Text>
            <Button w='80%' mt={5} backgroundColor='#ff4444' _text={{color: '#2e2e2e', fontSize: 16, fontWeight: 'bold'}} onPress={() => handleSelectImage()}>Carregar</Button>
            <TouchableWithoutFeedback onPress={isUploaded ? handleRemoveItem : handleSelectImage}>
                <Text style={styles.cardMessageText}>{(isUploaded ? 'Remover imagem carregada' : 'Nenhuma imagem carregada')}</Text>
            </TouchableWithoutFeedback>
            <Button w='60%' variant='outline' marginTop={4} borderColor='#ff4444'  _text={{fontWeight: 'bold', fontSize: 16, fontFamily: 'Roboto'}}
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
    cardMessageText: {
        width: '80%',
        fontSize: 12,
        fontWeight: '600',
        color: '#c2c2c2',
        marginLeft: 20,
        marginTop: 10
    }
});