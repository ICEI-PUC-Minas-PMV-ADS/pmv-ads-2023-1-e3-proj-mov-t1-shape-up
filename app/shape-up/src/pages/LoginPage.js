import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, Input, Button, Divider, Flex } from 'native-base';
import { login } from "../services/auth.services";

export function LoginPage({ navigation }) {

    const [show, setShow] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {height, width} = useWindowDimensions();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/imgs/login-page-background.jpg')} resizeMode="cover" style={{
                height: height + 40,
                width: width
            }}>
                <View style={{width: '100%', height: '100%', flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                    <LinearGradient
                        style={{height: 220, width: '100%', alignSelf: 'flex-start'}}
	                    colors={['#FF4444','#000000']}
                        start={{x:0,y:0}}
                        end={{x:0.1,y:1}}>
                        <Image style={{width: 300, height: 150, alignSelf: 'center', marginTop: 50}} resizeMode='contain' source={require('../../assets/imgs/logomarca.png')}></Image>
                    </LinearGradient>
                    <Stack space={4} w="100%" mb='100' alignItems="center">
                        <Input value={email} onChangeText={(text) => setEmail(text)} w={{base: "75%", md: "25%"}} placeholder="Email" />
                        <Input value={password} onChangeText={(text) => setPassword(text)} w={{base: "75%", md: "25%"}} type={show ? "text" : "password"} placeholder="Password"/>
                        <Button w={{base: "75%", md: "25%"}} h={{base: '45px'}} _text={{color: "#000000"}} bg='#ff4444' onPress={() => {
                            login(email, password).then(() => navigation.navigate("Pamonha"));}}>Login</Button>
                        <Flex direction="row" alignItems='center' justifyContent='center' w={{base: '75%', md: "25%"}}>
                            <Divider bg="#dedede" w='40%' thickness="2" orientation="horizontal" />
                            <Text style={{color: '#dedede', marginRight: 10, marginLeft: 10, fontSize: 18}}>or</Text>
                            <Divider bg="#dedede" w='40%' thickness="2" orientation="horizontal" />
                        </Flex>
                        <Button w={{base: "75%", md: "25%"}} variant="outline" h={{base: '45px'}} _text={{color: "#FF4444"}} borderColor='#ff4444'>Cadastro</Button>
                    </Stack>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
  });
  