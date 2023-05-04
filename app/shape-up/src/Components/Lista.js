import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}

            </View>
            <View>
                <Text>{props.desc}</Text>
                <Text>{props.doneAt + ""}</Text>
            </View>

        </View>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View><Text>Concluido</Text></View>
        )
    } else {
        return (
            <View><Text>Pendente</Text></View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#FFF',
        borderWidth: 1,
        alignItems: 'center',
        paddingVertical: 10


    },
    checkContainer: {
        width: '20%'
    }

})