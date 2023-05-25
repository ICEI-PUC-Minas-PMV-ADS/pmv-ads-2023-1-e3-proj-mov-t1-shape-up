import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { HomePage } from '../pages/HomePage';
import { TutorialsPage } from '../pages/TutorialsPage';

export function Tabbar({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'tutorial', title: 'Tutorial', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    ]);

    const HomeRoute = () => <HomePage></HomePage>
    const TutorialRoute = () => <TutorialsPage></TutorialsPage>

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute, tutorial: TutorialRoute
    });

    return (
        <BottomNavigation style={{ justifyContent: 'flex-start' }} barStyle={{ justifyContent: 'flex-start' }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
}