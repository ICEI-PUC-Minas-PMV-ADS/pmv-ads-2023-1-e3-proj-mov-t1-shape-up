import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Spinner } from 'native-base';
import { isAuthenticated  } from "../services/auth.services";

export function SplashScreen({navigation}) {

    React.useEffect(function() {
        isAuthenticated()
            .then(function(response) {
              
              if (response.isAuthenticated) {
                navigation.push('Home');
              } else {
                navigation.navigate('Login');
              }
            });
    }, []);

    return (
        <View style={{height: '100%', width: '100%'}}>
            <LinearGradient
                            style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}
	                        colors={['#ff4444','#000000']}
                            start={{x:-1,y:-0.9}}
                            end={{x:0.1,y:1}}>
                       <Image style={{
                           width: 300,
                           height: 150,
                           alignSelf: 'center',
                           marginBottom: 100
                       }} resizeMode='contain' source={require('../../assets/imgs/logomarca.png')}></Image>     
                       <Spinner size={80}/>
                </LinearGradient>
        </View>
    );
}