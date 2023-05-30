import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Box, Center, Fab, Icon, Text, FlatList } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dumbbell } from '../../assets/icons/Dumbbell';
import { Arm } from '../../assets/icons/Arm';
import { Serie } from '../../assets/icons/Serie';
import { Counter } from '../../assets/icons/Counter';

export function WorkoutPage() {

    const data = [
        {key: 1},
        {key: 2},
        {key: 3}];

    return (
        <Box w='100%' h='100%' bg='#ff0000'>
            <Box w='100%' h={90} bg='#151515'></Box>
            <ImageBackground source={require('../../assets/imgs/workout.png')}  resizeMode="cover" style={{
                width: '100%',
                height: 200
            }}>
                <Center w='100%' h='100%' bg='rgba(0,0,0,.6)' pl='6'>
                    <Fab shadow={2} size={42} colorScheme='secondary' placement='top-left' top='100' icon={
                        <Icon as={MaterialCommunityIcons} name="arrow-left" color='primary.400' size={22}/>}></Fab>
                    <Text w='100%' fontSize='2xl' color='#fff'>Treino de Braço</Text>
                    <Text w='100%' fontSize='sm' color='#d6d6d6'>Última vez feito em 22 de janeiro, 2022</Text>
                    <Fab shadow={2} size='81' colorScheme='secondary' placement='top-left' top='250' left='42%' icon={
                        <Dumbbell></Dumbbell>}></Fab>
                </Center>
            </ImageBackground>
            <Box w='100%' h='100%' bg='secondary.600' pt={60} pl={3} pr={3}>
                <Text w='100%' fontSize='sm' color='#fff'>Exercícios</Text>
                <FlatList h='100%' w='100%' data={data} renderItem={renderItem}>

                </FlatList>
            </Box>
        </Box>
    );
}

function renderItem() {
    return (
        <Box w='100%' h={100} bg='secondary.900' mt={3} borderRadius={10} flex={1} flexDirection='row'>
            <Box flex={1} justifyContent='center' pl={6}>
                <Text w='100%' fontSize='sm' color='#fff'>Flexão</Text>
                <Text w='100%' fontSize='xs' color='#d6d6d6'>Nível fácil</Text>
            </Box>
            <Box flex={1} flexDirection='row' justifyContent='center' pl={6} pr={3}>
                <Arm></Arm>
                <Serie></Serie>
                <Counter></Counter>
            </Box>
        </Box>
    );
}