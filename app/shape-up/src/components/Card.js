import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Card(props) {
    return (
        <View {...props} style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderRadius: 20,
            width: '75%',
            height: '75%',
            backgroundColor: '#2E2E2E',
            height: 350,
            width: 390
        }}>{props.children}</View>
    );
}