import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Checkbox } from 'react-native-paper';
import { Image } from "native-base";





export default props => {
    const [checked, setChecked] = React.useState(false);
    const imagePath = props.imagePath
    return (

        <View style={styles.container}>
            <View style={styles.checkContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
            </View>
            <View style={styles.textView}>
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.numex}>{props.numEx}</Text>
            </View>
            <View style={styles.imageView}>
                <Image style={styles.image} source={{ uri: props.imagePath }} alt="Alternate Text" size="xl" />
            </View>
            <TouchableOpacity style={styles.buttonStyle}>
                <Icon name="fitness-center" size={15} color={'#FF4444'}></Icon>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '90%',
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: '#343434',//Alterar
        backgroundColor: '#151515',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 28

    },
    checkContainer: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },


    desc: {
        fontFamily: 'Roboto',
        color: '#FFF',
        marginRight: 20

    },

    numex: {
        fontFamily: 'Roboto',
        color: 'grey'
    },

    textView: {
        width: '40%',



    },


    imageView: {
        height: '100%',
        width: '40%',
        right: 0,


    },

    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 50,


    },
    buttonStyle: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#151515',
        justifyContent: 'center',
        alignItems: 'center'

    },
})