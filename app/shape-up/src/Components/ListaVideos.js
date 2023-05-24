import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import { Box, Text } from 'native-base';


export default props => {
    const imagePath = props.imagePath
    return (
        <Box style={styles.container}>
            <Box style={styles.textView}>
                <Text style={styles.propname}>{props.nomeex}</Text>
                <Text style={styles.propnivel}>{props.nivel}</Text>
            </Box>

            <Box style={styles.imageView}>
                <Image style={styles.image} source={{ uri: props.imagePath }} alt="Alternate Text" size="xl" />
            </Box>

            <TouchableOpacity style={styles.buttonStyle}>
                <Icon name="controller-play" size={15} color={'#FF4444'}></Icon>
            </TouchableOpacity>
        </Box>
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
        marginBottom: 20,
        left: 5,



    },

    propname: {
        fontFamily: 'Roboto',
        color: '#FFF',
        marginRight: 20

    },

    propnivel: {
        fontFamily: 'Roboto',
        color: 'grey'
    },

    textView: {
        width: '40%',



    },


    imageView: {
        height: '100%',
        width: '50%',
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