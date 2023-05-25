import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Avatar } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Avatar bg="indigo.500" source={{
                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                    JB
                </Avatar>
                <Text style={styles.username}>{name}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <MaterialCommunityIcons name="logout-variant" size={25} color={'#FF4444'}></MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 21,
        paddingBottom: 21,
    },

    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    username: {
        fontSize: 18,
        color: '#FF4444',
        fontWeight: 'bold',
        marginLeft: 18
    },

    buttonStyle: {
        marginRight: 20
    }
})