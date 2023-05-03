import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { theme } from './assets/resources/Theme';
import { LoginPage } from './src/pages/LoginPage';
import { CadastrePage } from './src/pages/CadastrePage';
import { PamonhaPage } from './src/pages/PamonhaPage';
import { isAuthenticated  } from "./src/services/auth.services";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Login"} screenOptions={{headerShown: false,}}>
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="Cadastre" component={CadastrePage}/>
            <Stack.Screen name="Pamonha" component={PamonhaPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});