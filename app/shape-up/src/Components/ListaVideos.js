import React from "react";
import { StyleSheet, TouchableOpacity, Image, } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import { Box, Text, Modal } from 'native-base';
import YoutubePlayer from "react-native-youtube-iframe";

function ExtractVideoId(url) {
    return url.substring(url.length - 11);
}

export default props => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [playing, setPlaying] = React.useState(false);
  
    const onStateChange = React.useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
      }
    }, []);
  
    const togglePlaying = React.useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
  
    function handleRunVideo() {
      setModalVisible(true);
      setPlaying(true);
    }
  
    function handleOnClose() {
      setModalVisible(false);
      setPlaying(false);
    }

    return (
        <>
        <Modal isOpen={modalVisible} onClose={handleOnClose} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content minWidth='90%' style={{backgroundColor: '#2e2e2e'}}>
          <Modal.CloseButton />
          <Modal.Body>
          <YoutubePlayer
            height={200}
            play={playing}
            videoId={ExtractVideoId(props.tutorialUrl)}
            onChangeState={onStateChange}/>
          </Modal.Body>
        </Modal.Content>
      </Modal>
        <Box bg='secondary.900' style={styles.container}>
            <Box style={styles.textView}>
                <Text style={styles.propname}>{props.nomeex}</Text>
                <Text style={styles.propnivel}>{props.nivel}</Text>
            </Box>

            <Box style={styles.imageView}>
                <Image style={styles.image} source={{ uri: `https://img.youtube.com/vi/${ExtractVideoId(props.tutorialUrl)}/hqdefault.jpg` }} alt="Alternate Text" size="xl"></Image>
                <TouchableOpacity onPress={handleRunVideo} style={styles.buttonStyle}>
                    <Icon name="controller-play" size={15} color={'#FF4444'}></Icon>
                </TouchableOpacity>
            </Box>
        </Box>
        </>
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