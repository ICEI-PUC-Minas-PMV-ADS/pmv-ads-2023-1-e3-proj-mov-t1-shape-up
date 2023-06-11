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
import { getExercises } from "./src/services/exercise.services";

const Stack = createNativeStackNavigator();

export default function App() {

    const [isLoading, setIsLoading] = React.useState(true);
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [hasTraining, setHasTraining] = React.useState(false);
    const [user, setUser] = React.useState(null);
    const [training, setTraining] = React.useState(null);
    const [exercises, setExercices] = React.useState(null);

    React.useEffect(function () {
        isAuthenticated()
            .then(async function (response) {
                if (response.isAuthenticated) {
                    setIsSignedIn(true);
                    authenticate();
                } else {
                    setIsSignedIn(false);
                    setIsLoading(false);
                }
            });
    }, []);

    if (isLoading) {
        return (
            <NativeBaseProvider theme={Theme}>
                <SplashScreen></SplashScreen>
            </NativeBaseProvider>
        );
    }

    async function loadInformations() {

        var userInfo = await getUserInfo();
        var trainingInfo = await getTraining();
        var exercisesInfo = await getExercises();
    
        setUser(userInfo);
        setExercices(exercisesInfo);
        setTraining(trainingInfo);

        if (trainingInfo.length > 0) {
            setHasTraining(true);
        }
    }

    function authenticate() {

        setIsLoading(true);

        loadInformations()
            .then(function() {
                setIsLoading(false);
                setIsSignedIn(true);
        })
            .catch(function(error) {
                console.error(error);
                setIsLoading(false);
        });
    }

    function handleLogout() {
        logout();
        setIsSignedIn(false),
        setTraining(null);
        setUser(null);
        setExercices(null);
        setHasTraining(false);
    }

    return (
        <SafeAreaProvider>
            <NativeBaseProvider theme={Theme}>
                <AuthContext.Provider value={{ handleLogout, authenticate, user }}>
                    <TrainingContext.Provider value={{ training, exercises }}>
                        <NavigationContainer>
                            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                                { isSignedIn && hasTraining ? 
                                    <>
                                    <Stack.Screen name="Main" component={MainPage}/>
                                    </> 
                                    :
                                  isSignedIn && !hasTraining ?
                                    <>
                                    <Stack.Screen name="Welcome" component={WelcomePage} />
                                    <Stack.Screen name="GenerateTraining" component={GenerateTrainingPage} />
                                    <Stack.Screen name="TrainingCreated" component={TrainingCreatedPage} />
                                    </>
                                    :
                                    <>
                                    <Stack.Screen name="Login" component={LoginPage} />
                                    <Stack.Screen name="Cadastre" component={CadastrePage} />
                                    <Stack.Screen name="Welcome" component={WelcomePage} />
                                    <Stack.Screen name="GenerateTraining" component={GenerateTrainingPage} />
                                    <Stack.Screen name="TrainingCreated" component={TrainingCreatedPage} />
                                    </>
                                }
                            </Stack.Navigator>
                        </NavigationContainer>
                    </TrainingContext.Provider>
                </AuthContext.Provider>
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
}