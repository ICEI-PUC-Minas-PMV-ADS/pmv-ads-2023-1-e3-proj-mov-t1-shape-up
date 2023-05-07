import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { theme } from './assets/resources/Theme';
import { LoginPage } from './src/pages/LoginPage';
import { CadastrePage } from './src/pages/CadastrePage';
import { WelcomePage } from './src/pages/WelcomePage';
import { HomePage } from './src/pages/HomePage';
import { SplashScreen } from './src/pages/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Splash'} screenOptions={{headerShown: false,}}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="Cadastre" component={CadastrePage}/>
            <Stack.Screen name="Welcome" component={WelcomePage}/>
            <Stack.Screen name="Home" component={HomePage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}