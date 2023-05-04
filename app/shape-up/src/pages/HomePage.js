import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import moment from 'moment'
import 'moment/locale/pt-br'

import Header from "../Components/Header"

function Saudacao() {
    const today = moment().hour;
    if (today > 0 && today <= 12) {
        return "Bom dia!"
    }
    else if (today > 12 && today <= 18) {
        return "Boa Tarde!"
    }
    else {
        return "Boa Noite!"
    }
}

export function HomePage() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
    const name = "Marcos Alberto"
    return (
        <View>
            <Header name={name} ></Header>
            <View style={styles.container}>
                <Text style={styles.contentTxt}>{Saudacao()} {name}</Text>
                <Text style={styles.contentTxt}>{today}</Text>


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202020',
        height: '100%',
        paddingTop: 15,

    },

    contentTxt: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,




    }
})

