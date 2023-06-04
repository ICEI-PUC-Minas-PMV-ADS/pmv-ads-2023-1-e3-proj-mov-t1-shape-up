import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/pages/SplashScreen';
import LoginPage from './src/pages/LoginPage';
import CadastrePage from './src/pages/CadastrePage';
import WelcomePage from './src/pages/WelcomePage';
import Theme from './assets/resources/Theme';
import MainPage from './src/pages/MainPage';
import GenerateTrainingPage from './src/pages/GenerateTrainingPage';
import TrainingCreatedPage from './src/pages/TrainingCreatedPage';
import AuthContext from './src/contexts/AuthContext';
import TrainingContext from './src/contexts/TrainingContext';
import { isAuthenticated, logout } from './src/services/auth.services';
import { generate, getTraining } from './src/services/training.services';
import { getUserInfo } from './src/services/userdata.services';

const Stack = createNativeStackNavigator();

export default function App() {

    const [isLoading, setIsLoading] = React.useState(true);
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [training, setTraining] = React.useState(null);

    React.useEffect(function () {
        isAuthenticated()
            .then(async function (response) {
                if (response.isAuthenticated) {
                    setIsSignedIn(true);
                    await getUserInfo()
                        .then(function (response) {
                            setUser(response);
                        })
                } else {
                    setIsSignedIn(false);
                }

                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <NativeBaseProvider theme={Theme}>
                <SplashScreen></SplashScreen>
            </NativeBaseProvider>
        );
    }

    if (isSignedIn && (training == null)) {

        getTraining()
            .then(function (response) {
                setTraining(response);
            });
    }

    if (isSignedIn && (user == null)) {

        getUserInfo()
            .then(function (response) {
                setUser(response);
            })
    }

    function handleLogout() {
        logout();
        setIsSignedIn(false),
            setTraining(null);
        setUser(null);
    }

    return (
        <SafeAreaProvider>
            <NativeBaseProvider theme={Theme}>
                <AuthContext.Provider value={{ handleLogout, setIsSignedIn, user }}>
                    <TrainingContext.Provider value={{ training }}>
                        <NavigationContainer>
                            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                                {isSignedIn ? (
                                    <>
                                        <Stack.Screen name="Main" component={MainPage} />
                                    </>
                                ) : (
                                    <>
                                        <Stack.Screen name="Login" component={LoginPage} />
                                        <Stack.Screen name="Cadastre" component={CadastrePage} />
                                        <Stack.Screen name="Welcome" component={WelcomePage} />
                                        <Stack.Screen name="GenerateTraining" component={GenerateTrainingPage} />
                                        <Stack.Screen name="TrainingCreated" component={TrainingCreatedPage} />
                                    </>
                                )}
                            </Stack.Navigator>
                        </NavigationContainer>
                    </TrainingContext.Provider>
                </AuthContext.Provider>
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
}