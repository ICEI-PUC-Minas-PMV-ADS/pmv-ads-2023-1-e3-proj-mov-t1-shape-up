import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import CadastrePage from './pages/CadastrePage';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import GenerateTrainingPage from './pages/GenerateTrainingPage';
import TrainingCreatedPage from './pages/TrainingCreatedPage';

export const SignedInRoutes = createNativeStackNavigator({
    Main: {
        screen: MainPage,
    }
});

export const SignedInWithoutTrainingRoutes = createNativeStackNavigator({
    Welcome: {
        screen: WelcomePage
    },
    GenerateTraining: {
        screen: GenerateTrainingPage
    },
    TrainingCreated: {
        screen: TrainingCreatedPage
    }
});

export const SignedOutRoutes = createNativeStackNavigator({
    Login: {
        screen: LoginPage
    },
    Cadastre: {
        screen: CadastrePage
    },
    Welcome: {
        screen: WelcomePage
    },
    GenerateTraining: {
        screen: GenerateTrainingPage
    },
    TrainingCreated: {
        screen: TrainingCreatedPage
    }
});

export const createRootNavigator = (signedIn = false, hasTraining = false) => {

    let initialRouteName = "SignedOut";

    if (signedIn && hasTraining) {
        initialRouteName = "SignedIn";
    } else if (signedIn && !hasTraining) {
        initialRouteName = "WithoutTraining";
    }
    return createNativeStackNavigator({
      SignedIn: { screen: SignedInRoutes },
      SignedOut: { screen: SignedOutRoutes },
      WithoutTraining: { screen: SignedInWithoutTrainingRoutes }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: initialRouteName,
      navigationOptions: {
        gesturesEnabled: false
      }
    });
  };