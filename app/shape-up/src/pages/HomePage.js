import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../Components/Header"
import Lista from "../Components/Lista"


function Saudacao() {
    const saudacao = 'Olá'
    return saudacao

}



export function HomePage() {
    const name = "Marcos Alberto"

    return (
        <View>
            <Header name={name} ></Header>
            <View style={styles.container}>
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
        marginTop: 30,
        width: '100%',
        flex: 1,
        alignItems: 'center'
    },

    contentTxt: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,

    },
})

