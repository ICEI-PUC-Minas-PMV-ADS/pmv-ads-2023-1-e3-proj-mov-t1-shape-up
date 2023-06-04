import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Input, Button, FormControl, WarningOutlineIcon, Text, Box, Radio, Container } from 'native-base';
import Card from './Card';

export default function InputTimelineCard({setValue, handleNext}) {

    const [waitingResponse, setWaitingResponse] = React.useState(false);

    function handleValue(value) {
        setWaitingResponse(true);
        setValue(value);
        setWaitingResponse(false);
    }

    return (
        <Card>
            <MaterialCommunityIcons name="weight-lifter" size={48} color="#ff4444" marginTop={20}/>
            <Text style={styles.cardTitle}>Quanto tempo espera resultados?</Text>
            <Radio.Group defaultValue={0} style={styles.container} onChange={handleValue}>
                <Radio _text={{color: '#fff'}} value={0} my={2} onChange={handleNext}>Em 1 ano</Radio>
                <Radio _text={{color: '#fff'}} value={1} my={2} onChange={handleNext}>Em 3 anos</Radio>
                <Radio _text={{color: '#fff'}} value={2} my={2} onChange={handleNext}>Não definido</Radio>
            </Radio.Group>;
            <Button w='80%' style={{marginBottom: 20}} isDisabled={waitingResponse} variant='outline' borderColor='primary.400' _text={styles.confirmButtonText} onPress={handleNext}>Criar Treino</Button>
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