import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Box, Center, Fab, Icon, Text, FlatList } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dumbbell from '../Components/icons/Dumbbell';
import Arm  from '../Components/icons/Arm';
import Serie from '../Components/icons/Serie';
import Counter from '../Components/icons/Counter';
import { Header } from '../Components/Header';

export default function TrainingPage({navigation, route}) {

    const { training } = route.params;

    function getLastRunDate() {
        return 'Última vez feito em 22 de janeiro, 2022';
    }

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Box w='100%' h='100%' background='secondary.600'>
            <Header></Header>
            <ImageBackground source={{uri: training.imageData}}  resizeMode="cover" style={{
                width: '100%',
                height: 200
            }}>
                <Center w='100%' h='100%' bg='rgba(0,0,0,.8)' pl='6'>
                    <Fab onPress={handleGoBack} shadow={2} size={42} colorScheme='secondary' placement='top-left' top='120' icon={
                        <Icon as={MaterialCommunityIcons} name="arrow-left" color='primary.400' size={22}/>}></Fab>
                    <Text w='100%' fontSize='2xl' color='#fff'>{training.name}</Text>
                    <Text w='100%' fontSize='sm' color='#d6d6d6'>{getLastRunDate()}</Text>
                    <Fab shadow={2} size='sm' colorScheme='secondary' placement='top-left' top='270' left='40%' icon={
                        <Dumbbell></Dumbbell>}></Fab>
                </Center>
            </ImageBackground>
            <Text w='100%' mt={60} ml={3} fontSize='sm' color='#fff'>Exercícios</Text>
            <FlatList pr={3} pl={3} data={training.exercises} renderItem={renderItem}></FlatList>
        </Box>
    );
}

function getLevel(level) {
    switch(level){
        case 0: return 'Nível Fácil';
        case 1: return 'Nível Médio';
        case 2: return 'Nível Difícil';
    }
}

function renderItem({item}) {

    const exerciseDetails = item;
    const { exercise } = item;

    return (
        <Box w='100%' h={100} bg='secondary.900' mt={3} borderRadius={10} flex={0} flexDirection='row' 
            style={{borderColor: '#343434', borderWidth: 1}}>
            <Box flex={1} justifyContent='center' pl={6}>
                <Text w='100%' fontSize='sm' color='#fff'>{exercise.name}</Text>
                <Text w='100%' fontSize='xs' color='#d6d6d6'>{getLevel(exercise.level)}</Text>
            </Box>
            <Box style={styles.iconsContainer}>
                <Arm reps={exerciseDetails.reps}></Arm>
                <Serie series={exerciseDetails.series}></Serie>
                <Counter restTime={exerciseDetails.restTime}></Counter>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    iconsContainer: {
        flex: 0,
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-around'
    }
});