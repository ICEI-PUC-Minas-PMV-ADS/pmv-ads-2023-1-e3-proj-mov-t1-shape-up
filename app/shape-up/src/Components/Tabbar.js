import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { HomePage } from '../pages/HomePage';
import { TutorialsPage } from '../pages/TutorialsPage';




export function Tabbar({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', focusedIcon: 'dumbbell', unfocusedIcon: 'dumbbell' },
        { key: 'tutorial', focusedIcon: 'school', unfocusedIcon: 'school-outline' },
    ]);

    const HomeRoute = () => <HomePage></HomePage>
    const TutorialRoute = () => <TutorialsPage></TutorialsPage>


    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute, tutorial: TutorialRoute
    });


    return (
        <BottomNavigation style={{ justifyContent: 'flex-start', height: '100%' }} barStyle={{ justifyContent: 'flex-start', backgroundColor: '#151515', height: 60, }} activeColor='#ff4444' inactiveColor='#ff4444'
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}

        />


    );
}

