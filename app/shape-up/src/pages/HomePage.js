import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";
import { FlatList } from "native-base";
import Lista from "../Components/Lista"
import TrainingContext from "../contexts/TrainingContext";
import AuthContext from '../contexts/AuthContext';


function Saudacao() {
    const saudacao = 'Olá,'
    return saudacao

}



export function HomePage({navigation}) {

    const { user } = React.useContext(AuthContext);
    const { training } = React.useContext(TrainingContext);

    function handleGoToTraining(training) {
        navigation.navigate('Training', {
            training: training
        });
    }

    return (
        <View style={{ height: "100%" }}>
            <View style={styles.container}>
                <Text style={styles.contentTxt}>{Saudacao()} {user.name}</Text>
                <Text style={styles.contentTxt}>Por onde vamos começar?</Text>
                <View style={styles.containerLista}>
                    <FlatList pr={3} pl={3} contentContainerStyle={{ alignItems: 'center', }}
                        data={training}
                        renderItem={({ item }) => <Lista training={item} handleGoToTraining={handleGoToTraining}/>}
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