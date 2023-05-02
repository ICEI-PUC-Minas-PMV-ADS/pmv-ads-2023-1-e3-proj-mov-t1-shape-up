import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, Input, Button, Divider, Flex } from 'native-base';
import { register } from "../services/auth.services";

export function CadastrePage() {

    const [show, setShow] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const {height, width} = useWindowDimensions();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/imgs/cadastre-page-background.jpg')} resizeMode="cover" style={{
                height: height + 40,
                width: width
            }}>
                <View style={{flex: 1, height: '100%', width: '100%', justifyContent: 'space-between' , backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <Image style={{width: 300, height: 150, alignSelf: 'center', marginTop: 50}} resizeMode='contain' source={require('../../assets/imgs/logomarca.png')}></Image>
                    <Stack space={3} w="100%" mb='100' alignItems="center">
                        <Input value={name} onChangeText={(text) => setName(text)} w={{base: "75%", md: "25%"}} placeholder="Name" />
                        <Input value={email} onChangeText={(text) => setEmail(text)} w={{base: "75%", md: "25%"}} placeholder="Email" />
                        <Input value={password} onChangeText={(text) => setPassword(text)} w={{base: "75%", md: "25%"}} type={show ? "text" : "password"} placeholder="Password"/>
                        <Input value={rePassword} onChangeText={(text) => setRePassword(text)} w={{base: "75%", md: "25%"}} type={show ? "text" : "re-password"} placeholder="Re-Password"/>
                        <Button w={{base: "75%", md: "25%"}} h={{base: '45px'}} _text={{color: "#000000"}} bg='#ff4444' onPress={() => {
                            register(name, email, password).then(() => navigation.navigate("Pamonha"));}}>Criar conta</Button>
                        <Flex direction="row" alignItems='center' justifyContent='center' w={{base: '75%', md: "25%"}}>
                            <Divider bg="#dedede" w='40%' thickness="2" orientation="horizontal" />
                            <Text style={{color: '#dedede', marginRight: 10, marginLeft: 10, fontSize: 18}}>or</Text>
                            <Divider bg="#dedede" w='40%' thickness="2" orientation="horizontal" />
                        </Flex>
                        <Button w={{base: "75%", md: "25%"}} variant="outline" h={{base: '45px'}} _text={{color: "#FF4444"}} borderColor='#ff4444' 
                        onPress={() => navigation.navigate("Login")}>Login</Button>
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
  