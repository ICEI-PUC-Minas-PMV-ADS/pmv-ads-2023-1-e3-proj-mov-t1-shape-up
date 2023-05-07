import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import Header from "../Components/Header"
import Lista from "../Components/Lista"


function Saudacao() {
    const saudacao = 'Olá,'
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
                    <Lista desc="Treino de Peito" numEx={"5 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/homem-musculoso-fazendo-flexoes-usando-halteres_7502-4776.jpg?w=1380&t=st=1683332069~exp=1683332669~hmac=505602e525d8927c23854ef6bc1752d968c9f4c0cb28cfc1fa996b06e40fff44'></Lista>
                    <Lista desc="Treino de Braços" numEx={"6 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/homem-forte-treinando-na-academia_1303-23478.jpg?w=1380&t=st=1683333513~exp=1683334113~hmac=3c6c4e5d32331cae27b5aaf51cc2f8b2dd89780632f361c4f40022ee28f4d7d0'></Lista>
                    <Lista desc="Treino de Pernas" numEx={"7 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/fechar-o-treino-de-kettlebells-no-ginasio_23-2149307727.jpg?w=1380&t=st=1683459788~exp=1683460388~hmac=5d660029a896250b5444a4f61cedd5c5b48cc41aececa003de69a61a4b35ed3c'></Lista>
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
        alignItems: 'center'

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

