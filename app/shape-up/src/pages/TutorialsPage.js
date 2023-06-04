import React from "react";
import { StyleSheet, Image, ScrollView, FlatList } from "react-native";
import { Box, Text } from "native-base";
import ListaVideos from "../Components/ListaVideos"
import TrainingContext from "../contexts/TrainingContext";


export function TutorialsPage() {
    const { user } = React.useContext(AuthContext);
    const { training } = React.useContext(TrainingContext);
    const name = user.name;
    return (

        <Box h='100%'>
            <Box bg="secondary.600" style={styles.containerGeral}>
                <Text style={styles.propTxt}>Tutoriais de Exercícios:</Text>
                <FlatList contentContainerStyle={{ alignItems: 'center', }}
                    data={training}
                    renderItem={({ item }) => <ListaVideos nomeex={item.name} nivel={"nivel: " + item.level} imagePath={item.imageData} />}
                    keyExtractor={item => item.id}
                />
            </Box>
        </Box>



    )


}

const styles = StyleSheet.create({
    containerGeral: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    propTxt: {
        marginTop: 20,
        marginBottom: 20,
        left: 20,
        color: '#FFF',
        fontSize: 15,
        width: '100%'

    }
})
