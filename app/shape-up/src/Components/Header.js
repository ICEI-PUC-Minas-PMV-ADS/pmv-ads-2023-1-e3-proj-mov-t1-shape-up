import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Avatar } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthContext from '../contexts/AuthContext';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export function Header() {
    const { user, handleLogout } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Avatar bg="indigo.500" source={{
                    uri: user.profile
                }}>
                    JB
                </Avatar>
                <Text style={styles.username}>{user.name}</Text>
            </View>
            <TouchableOpacity onPress={handleLogout}>
                <MaterialCommunityIcons name="logout-variant" size={25} color={'#FF4444'}></MaterialCommunityIcons>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        flexDirection: 'row',
        paddingTop: statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        flex: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
})