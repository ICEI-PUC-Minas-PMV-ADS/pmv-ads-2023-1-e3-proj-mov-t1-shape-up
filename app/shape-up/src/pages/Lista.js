import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from "moment";
import 'moment/locale/pt-br'


export default props => {

    //constdate = moment(props.estimateAt)

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}

            </View>
            <View>
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.date}>{props.doneAt + ""}</Text>
            </View>

        </View>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color={'#FFF'}></Icon>
            </View>
        )
    } else {
        return (
            <View style={styles.pending}></View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: '#FFF',//Alterar
        borderWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 28


    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },


    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#FFF'

    },

    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'


    },

    desc: {
        fontFamily: 'Roboto',
        color: '#FFF'

    },

    date: {
        color: '#C6C9CE',
    }

})