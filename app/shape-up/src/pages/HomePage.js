import React from 'react';
import { View, Text} from 'react-native';
import { Button } from 'native-base';

export function HomePage({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Home Page</Text>
            <Button onPress={() => {}}>Logout</Button>
        </View>
    );
}