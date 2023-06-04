import React, { useRef, useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    StatusBar,
    Platform
} from 'react-native';
import { Box, Button } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LogoMarca from '../components/LogoMarca';
import InputGoalCard from '../components/InputGoalCard';
import InputTrainingExpCard from '../components/InputTrainingExpCard';
import InputTimelineCard from '../components/InputTimelineCard';
import TrainingContext from '../contexts/TrainingContext';
import { generate } from '../services/training.services';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const imageBackground = require('../../assets/imgs/cadastre-page-background.jpg');
const navigationBarHeight = StatusBar.currentHeight;

export default function GenerateTrainingPage({navigation}) {

    const carousel = useRef(null);
    const [index, setIndex] = React.useState(0);
    const [goal, setGoal] = React.useState(0);
    const [trainingExp, setTrainingExp] = React.useState(0);
    const [timeline, setTimeline] = React.useState(0);

    function handleNext() {
        carousel.current._snapToItem(carousel.current._getPositionIndex(index + 1));
    }

    function handleBack() {
        carousel.current._snapToItem(carousel.current._getPositionIndex(index - 1));
    }

    function handleCreateTraining() {
        
        generate(goal, trainingExp, timeline)
            .then(function(response) {
                if (response == true) {
                    navigation.push("TrainingCreated");
                }
        });
    }

    function renderCarouselItems({item, index}) {
        switch(index) {
            case 0:
                return <InputGoalCard setValue={setGoal} handleNext={handleNext}></InputGoalCard>;
            case 1:
                return <InputTrainingExpCard setValue={setTrainingExp} handleNext={handleNext}></InputTrainingExpCard>;
            case 2:
                return <InputTimelineCard setValue={setTimeline} handleNext={handleCreateTraining}></InputTimelineCard>;
        }
    }

    return (
        <ImageBackground source={imageBackground} resizeMode='cover' style={styles.imageBackground}>
            <LogoMarca style={styles.logo}></LogoMarca>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.touchableArea}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.touchableArea}>
                    <Box style={styles.container}>
                        <Box style={styles.carouselContainer}>
                            <Carousel
                                data={[0,1,2]}
                                sliderWidth={screenWidth * .9}
                                ref={carousel}
                                itemWidth={screenWidth * .9}
                                useScrollView={false}
                                scrollEnabled={false}
                                onSnapToItem={(index) => setIndex(index)}
                                renderItem={renderCarouselItems}/>
                        </Box>
                        <Box style={styles.bottomNavContainer}>
                            <Button style={styles.bottomNavItem} _text={styles.bottomNavItemText} onPress={handleBack}>Voltar</Button>
                        </Box>  

                        <Pagination
                            style={{borderColor: 'black', borderWidth: 2, marginBottom: navigationBarHeight}}
                            dotsLength={3}
                            activeDotIndex={index}
                            carouselRef={carousel}
                            dotStyle={styles.dotStyle}
                            tappableDots={true}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}/>
                    </Box>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    touchableArea: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        width: screenWidth,
        height: screenHeight + 40
    },
    logo: {
        marginTop: 50
    },
    content: {
        height: '100%'
    },
    container: {
        flex: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselContainer: {
        height: screenWidth * .8
    },
    bottomNavContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20
    },
    bottomNavItem: {
        backgroundColor: 'transparent',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0
    },
    bottomNavItemText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff4444'
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor: '#ff4444',
        marginHorizontal: 0,
        backgroundColor: '#ff4444'
    }
});