import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, FlatList } from "react-native";
import Lista from "../Components/Lista"
import TrainingContext from "../contexts/TrainingContext";
import AuthContext from '../contexts/AuthContext';


function Saudacao() {
    const saudacao = 'Olá,'
    return saudacao

}



export function HomePage() {

    const { user } = React.useContext(AuthContext);
    const { training } = React.useContext(TrainingContext);

    const name = user.name;

    return (
        <View style={{ height: "100%" }}>
            <View style={styles.container}>
                <Text style={styles.contentTxt}>{Saudacao()} {name}</Text>
                <Text style={styles.contentTxt}>Por onde vamos começar?</Text>
                <View style={styles.containerLista}>
                    <FlatList contentContainerStyle={{ alignItems: 'center', }}
                        data={training}
                        renderItem={({ item }) => <Lista desc={item.name} numEx={item.exercises.length + " exercícios"} imagePath={item.imageData} />}
                        keyExtractor={item => item.id}
                    />
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
        fontSize: 15,
        marginLeft: 20

    },

})