import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import moment from 'moment'
import 'moment/locale/pt-br'
import Header from "../Components/Header"
import Lista from "../Components/Lista"


function Saudacao() { //Consultar Raul sobre o erro
    const hour = moment().hour;
    if (hour >= 0 && hour <= 11) {
        return "Bom dia!"
    }
    else if (hour >= 12 && hour <= 17) {
        return "Boa Tarde!"
    }
    else if (hour >= 18 && hour <= 23) {
        return "Boa Noite!"
    }

}



export function HomePage() {
    const today = moment().locale('pt-br').format('D [de] MMMM')
    const name = "Marcos Alberto"

    return (
        <View>
            <Header name={name} ></Header>
            <View style={styles.container}>
                <Text style={styles.contentTxt}>{today}</Text>
                <Text style={styles.contentTxt}>{Saudacao()} {name}</Text>
                <Text style={styles.contentTxt}>Por onde vamos começar?</Text>
                <View style={styles.containerLista}>
                    <Lista desc="Treino de Peito" doneAt={new Date()}></Lista>
                    <Lista desc="Treino de Braços" doneAt={null}></Lista>
                </View>
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

    containerLista: {
        marginTop: 30
    },

    contentTxt: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,

    },
})

