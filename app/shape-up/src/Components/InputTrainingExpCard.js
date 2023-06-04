import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Input, Button, FormControl, WarningOutlineIcon, Text, Box, Radio, Container } from 'native-base';
import Card from './Card';

export default function InputTrainingExpCard({setValue, handleNext}) {

    function handleValue(value) {
        setValue(value);
    }

    return (
        <Card>
            <MaterialCommunityIcons name="weight-lifter" size={48} color="#ff4444" marginTop={20}/>
            <Text style={styles.cardTitle}>A quanto tempo você treina?</Text>
            <Radio.Group defaultValue={0} style={styles.container} onChange={handleValue}>
                <Radio _text={{color: '#fff'}} value={0} my={2}>Menos de 1 mês</Radio>
                <Radio _text={{color: '#fff'}} value={1} my={2}>Menos de 1 ano</Radio>
                <Radio _text={{color: '#fff'}} value={2} my={2}>1+ anos</Radio>
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
        fontSize: 16
    },
});
