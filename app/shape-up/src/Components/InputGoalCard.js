import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Input, Button, FormControl, WarningOutlineIcon, Text, Box, Radio, Container } from 'native-base';
import Card from './Card';

export default function InputGoalCard({setValue, handleNext}) {

    function handleValue(value) {
        setValue(value);
    }

    return (
        <Card>
            <MaterialCommunityIcons name="weight-lifter" size={48} color="#ff4444" marginTop={20}/>
            <Text style={styles.cardTitle}>Qual é o seu objetivo?</Text>
            <Radio.Group defaultValue={0} style={styles.container} onChange={handleValue}>
                <Radio _text={{color: '#fff'}} value={0} my={2}>Ganho de massa muscular</Radio>
                <Radio _text={{color: '#fff'}} value={1} my={2}>Perda de peso</Radio>
            </Radio.Group>;
            <Button w='80%' style={{marginBottom: 20}}  variant='outline' borderColor='primary.400' _text={styles.confirmButtonText} onPress={handleNext}>Confirmar</Button>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardTitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff',
    },
    container: {
        width: '80%',
    },
    confirmButtonText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
    },
});