import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Box } from 'native-base';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Card(props) {
    return (
        <Box {...props} style={styles.card}>
            {props.children}
        </Box>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#2E2E2E',
        height: screenWidth * .8,
        width: screenWidth * .9
    }
});