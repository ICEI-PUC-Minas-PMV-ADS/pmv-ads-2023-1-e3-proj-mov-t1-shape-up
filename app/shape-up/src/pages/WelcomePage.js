import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Text
  } from 'react-native';
  import { LinearGradient } from 'expo-linear-gradient';
  import { Card } from '../components/Card';
  import { MaterialCommunityIcons } from '@expo/vector-icons'; 
  import { MaterialIcons } from "@expo/vector-icons";
  import { createIcon, Button } from 'native-base';
  import { Dumbbell } from '../../assets/icons/Dumbbell';

  export function WelcomePage({navigation}) {

    const {height, width} = useWindowDimensions();

    return (
    <View style={styles.inner}>
        <ImageBackground source={require('../../assets/imgs/cadastre-page-background.jpg')}  resizeMode="cover" style={{
                height: height + 40,
                width: width
            }}>
                <Image style={styles.logo} resizeMode='contain' source={require('../../assets/imgs/logomarca.png')}></Image>     

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{height: 350,}}>
                        <Card>
                            <LinearGradient
                                style={styles.gradient}
	                            colors={['#ff4444','#2e2e2e']}
                                start={{x:-.2,y:-3}}
                                end={{x:.5,y:.6}}>
                                <Text style={styles.welcomeText}>Bem Vindo</Text>
                                <Text style={styles.nameText}>Raul Oliveira</Text>
                                <Dumbbell style={{marginTop: 20}}></Dumbbell>
                                <Text style={styles.messageText}>Pronto para iniciar sua rotina de treinos?</Text>
                                <Button w='80%' variant='outline' marginTop={7} borderColor='#ff4444'  _text={{fontWeight: 'bold', fontSize: 16, fontFamily: 'Roboto'}}
                                     onPress={() => {}}>Criar rotina</Button>
                            </LinearGradient>
                        </Card>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    gradient: {
        borderRadius: 20,
        height: '100%',
        width: '100%',
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    welcomeText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 30,
        marginLeft: 50,
        width: '100%'
    },
    nameText: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 30
    },
    messageText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 30,
    }
  });