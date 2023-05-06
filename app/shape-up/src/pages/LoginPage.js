import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Text
  } from 'react-native';
  import { Stack, Input, Button, Divider, Flex, Pressable, Icon } from 'native-base';
  import { LinearGradient } from 'expo-linear-gradient';
  import { MaterialIcons } from "@expo/vector-icons";
  
  export function LoginPage({navigation}) {

    const [show, setShow] = React.useState(false);
    const {height, width} = useWindowDimensions();

    return (
    <View style={styles.inner}>
        <ImageBackground source={require('../../assets/imgs/login-page-background.jpg')} resizeMode="cover" style={{
                height: height + 40,
                width: width
            }}>
                <LinearGradient
                            style={styles.gradient}
	                        colors={['#ff4444','#000000']}
                            start={{x:0,y:0}}
                            end={{x:0.1,y:1}}>
                       <Image style={styles.logo} resizeMode='contain' source={require('../../assets/imgs/logomarca.png')}></Image>     
                </LinearGradient>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Stack space={4} w={{base: '75%', md: '25%'}} alignItems='center'>
                            <Input color='light.50' placeholder="Email"/>
                            <Input color='light.50' type={show ? "text" : "password"} InputRightElement={
                                <Pressable onPress={() => setShow(!show)}>
                                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                </Pressable>}  placeholder="Password"/>
                            <Button w='100%' mt='3'>Login</Button>
                            <Flex direction="row" alignItems='center' justifyContent='center' pr='3' pl='3'>
                                <Divider bg='muted.300' w='40%' thickness="2" orientation="horizontal" />
                                <Text style={styles.dividerText}>or</Text>
                                <Divider bg='muted.300' w='40%' thickness="2" orientation="horizontal" />
                            </Flex>
                            <Button w='100%' variant='outline' onPress={() => navigation.navigate('Cadastre')}>Cadastre</Button>
                        </Stack>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    gradient: {
        height: 220,
        width: '100%'
    },
    dividerText: {
        color: '#dedede',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 18
    }
  });