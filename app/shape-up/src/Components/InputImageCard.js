import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Avatar, Text, Button, Box, Fab, Icon } from 'native-base';
import Card from './Card';
import * as ImagePicker from 'expo-image-picker';

export default function InputImageCard({setValue, handleNext, handleGoToLogin}) {

    const [imageUri, setImageUri] = React.useState(null);
    const [imageData, setImageData] = React.useState(null);
    const [isUploaded, setIsUploaded] = React.useState(false);

    function handleSelectImage() {

        ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
          base64: true
        }).then(result => {
            if (!result.canceled) {
                if (result.assets[0].uri != undefined) {
                    setImageUri(result.assets[0].uri);
                    setImageData(`data:image/jpeg;base64,${result.assets[0].base64}`)
                    setIsUploaded(true);
                }
            } else {
                alert('You did not select any image.');
                setImageUri(null);
                setIsUploaded(false);
            }
        })
    };

    function handleRemoveImage() {
        setImageUri(null);
        setIsUploaded(false);
    }

    function handleConfirm() {
        setValue(imageData);
        handleNext();
    }

    return (
        <Card>
            <Box style={{marginTop: 20}}>
                <Fab renderInPortal={false} style={{ display: isUploaded ? 'flex' : 'none' }} onPress={handleRemoveImage} backgroundColor='secondary.600' placement="top-right" right={-20} top={0} size="sm" icon={<Icon color="primary.400" as={MaterialCommunityIcons} name="delete" size="4" />}/>
                <Avatar bg='transparent' size='xl' source={{uri: imageUri}}>
                    <MaterialCommunityIcons name='image-outline' size={48} color='#ff4444'/>
                </Avatar>
            </Box>
            <Text style={styles.cardTitle}>Carregar foto de perfil</Text>
            <Button style={styles.selectImageButton} _text={styles.selectImageButtonText} onPress={handleSelectImage}>Carregar</Button>
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
    selectImageButton: {
        width: '80%',
        backgroundColor: '#ff4444',
    },
    selectImageButtonText: {
        color: '#2e2e2e',
        fontSize: 16,
        fontWeight: 'bold'
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
    cardMessageText: {
        width: '80%',
        fontSize: 12,
        fontWeight: '600',
        color: '#c2c2c2',
        marginLeft: 20,
    },
    
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },
});