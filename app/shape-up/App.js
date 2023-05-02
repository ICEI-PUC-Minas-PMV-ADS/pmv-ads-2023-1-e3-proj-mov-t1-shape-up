import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { theme } from './assets/resources/Theme';
import { LoginPage } from './src/pages/LoginPage';
import { CadastrePage } from './src/pages/CadastrePage';
import { PamonhaPage } from './src/pages/PamonhaPage';
import { isAuthenticate  } from "./src/services/auth.services";

const Stack = createNativeStackNavigator();
const getInitialPage = () => {
  const [signed, setSigned] = React.useState(false);
  const [signLoaded, setSignLoaded] = React.useState(true);

  if (!isAuthenticate()) {
    return 'Login;'
  }

  return 'Pamonha';
};

export default function App() {

  return (
    <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={getInitialPage()} screenOptions={{headerShown: false,}}>
              <Stack.Screen name="Login" component={LoginPage}/>
              <Stack.Screen name="Cadastre" component={CadastrePage}/>
              <Stack.Screen name="Pamonha" component={PamonhaPage}/>
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
    </SafeAreaProvider>
  );
}