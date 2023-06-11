import React from "react";
import { StyleSheet, TouchableOpacity, Image, } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import { Box, Text } from 'native-base';



export default props => {
    return (
        <Box bg='secondary.900' style={styles.container}>
            <Box style={styles.textView}>
                <Text style={styles.propname}>{props.nomeex}</Text>
                <Text style={styles.propnivel}>{props.nivel}</Text>
            </Box>

            <Box style={styles.imageView}>
                <Image style={styles.image} source={{ uri: props.imagePath }} alt="Alternate Text" size="xl"></Image>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Icon name="controller-play" size={15} color={'#FF4444'}></Icon>
                </TouchableOpacity>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: '#343434',//Alterar
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 20,




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
        width: '60%',
        paddingLeft: 15
    },


    imageView: {
        height: '100%',
        width: '40%',
    },

    image: {
        flex: 0,
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 50,


    },
    buttonStyle: {
        position: "absolute",
        right: 50,
        bottom: 35,
        width: 30,
        height: 30,
        borderRadius: 18,
        backgroundColor: '#151515',
        justifyContent: 'center',
        alignItems: 'center'

    },
})