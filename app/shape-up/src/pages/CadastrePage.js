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
  import { Icon, Input, Button, Pressable } from 'native-base';
  import Carousel, { Pagination } from 'react-native-snap-carousel';
  import { Card } from '../components/Card';
  import { MaterialCommunityIcons } from '@expo/vector-icons'; 
  import { MaterialIcons } from "@expo/vector-icons";
  import * as ImagePicker from 'expo-image-picker';

  let carousel = {};
  let nav = {};

  export function CadastrePage({navigation}) {

    carousel = React.useRef(null)
    nav = navigation;

    const [show, setShow] = React.useState(false);
    const {height, width} = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    // forms

    const [name, setName] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [rePassword, setRePassword] = React.useState(null);
    const [imageUri, setImageUri] = React.useState(null);

    const handleSelectImage = () => {

        ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        }).then(result => {
            if (!result.canceled) {
                setImageUri(result.uri);
              } else {
                alert('You did not select any image.');
              }
        })
      };

    return (
    <View style={styles.inner}>
        <ImageBackground source={require('../../assets/imgs/cadastre-page-background.jpg')}  resizeMode="cover" style={{
                height: height + 40,
                width: width
            }}>
                <Image style={styles.logo} resizeMode='contain' source={require('../../assets/imgs/logomarca.png')}></Image>     

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={{height: 350,}}>
                            <Carousel
                                data={[0,1,2,3]}
                                sliderWidth={390}
                                ref={carousel}
                                itemWidth={390}
                                useScrollView={false}
                                scrollEnabled={false}
                                onSnapToItem={(index) => setIndex(index)}
                                renderItem={({ item, index }) => {
                                    switch(index) {
                                        case 0:
                                            return (
                                                <Card>
                                                    <MaterialCommunityIcons name="account" size={48} color="#ff4444" marginTop={40}/>
                                                    <Text marginTop={20} style={styles.cardTitle}>Qual é o seu nome?</Text>
                                                    <Input w={'75%'} marginTop={10} placeholder='Nome' color='#ffffff' />
                                                    <Button w='60%' variant='outline' marginTop={6} borderColor='#ff4444'  _text={{fontWeight: 'bold', fontSize: 16, fontFamily: 'Roboto'}} 
                                                        onPress={() => carousel.current._snapToItem(carousel.current._getPositionIndex(index + 1))}>Confirmar</Button>
                                                    <TouchableWithoutFeedback onPress={() => nav.navigate('Login')}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <Text style={styles.cardHasAccountText}>Já tem uma conta?</Text>
                                                            <Text style={styles.cardLoginText}>Login</Text>
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                                </Card>
                                            );
                                        case 1:
                                            return (
                                                <Card>
                                                    <MaterialCommunityIcons name="at" size={48} color="#ff4444" marginTop={40}/>
                                                    <Text marginTop={20} style={styles.cardTitle}>Qual é o seu email?</Text>
                                                    <Input w={'75%'} marginTop={10} placeholder='Email' color='#ffffff'/>
                                                    <Button w='60%' variant='outline' marginTop={6} borderColor='#ff4444'  _text={{fontWeight: 'bold', fontSize: 16, fontFamily: 'Roboto'}}
                                                        onPress={() => carousel.current._snapToItem(carousel.current._getPositionIndex(index + 1))}>Confirmar</Button>
                                                    <TouchableWithoutFeedback onPress={() => nav.navigate('Login')}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <Text style={styles.cardHasAccountText}>Já tem uma conta?</Text>
                                                            <Text style={styles.cardLoginText}>Login</Text>
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                                </Card>
                                            );
                                        case 2:
                                            return (
                                                <Card>
                                                    <MaterialCommunityIcons name="image-outline" size={48} color="#ff4444" marginTop={40}/>
                                                    <Text marginTop={20} style={styles.cardTitle}>Carregar foto de perfil</Text>
                                                    <Button w='80%' mt={6} backgroundColor='#ff4444' _text={{color: '#2e2e2e', fontSize: 16, fontWeight: 'bold'}} onPress={() => handleSelectImage()}>Carregar</Button>
                                                    <Text style={{
                                                        width: '80%',
                                                        fontSize: 12,
                                                        fontWeight: '600',
                                                        color: '#c2c2c2',
                                                        marginLeft: 20,
                                                        marginTop: 10
                                                    }}>Nenhuma foto carregada</Text>
                                                    <Button w='60%' variant='outline' marginTop={4} borderColor='#ff4444'  _text={{fontWeight: 'bold', fontSize: 16, fontFamily: 'Roboto'}}
                                                        onPress={() => carousel.current._snapToItem(carousel.current._getPositionIndex(index + 1))}>Confirmar</Button>
                                                    <TouchableWithoutFeedback onPress={() => nav.navigate('Login')}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <Text style={styles.cardHasAccountText}>Já tem uma conta?</Text>
                                                            <Text style={styles.cardLoginText}>Login</Text>
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                                </Card>
                                            );
                                        case 3:
                                            return (
                                                <Card>
                                                    <MaterialCommunityIcons name="lock" size={48} color="#ff4444" marginTop={20}/>
                                                    <Text marginTop={10} style={styles.cardTitle}>Digite sua senha</Text>
                                                    <View style={{ width: '80%', height: 100, justifyContent: "space-between", marginTop: 10, marginBottom: 10}}>
                                                        <Input color='light.50' type={show ? "text" : "password"} InputRightElement={
                                                            <Pressable onPress={() => setShow(!show)}>
                                                                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                                            </Pressable>}  placeholder="Password"/>
                                                        <Input color='light.50' type={show ? "text" : "password"} InputRightElement={
                                                            <Pressable onPress={() => setShow(!show)}>
                                                                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                                            </Pressable>}  placeholder="Password"/>
                                                        
                                                    </View>
                                                    <Button w='60%' variant='outline' marginTop={4} borderColor='#ff4444'  _text={{fontWeight: 'bold', fontSize: 16, fontFamily: 'Roboto'}}
                                                        onPress={() => navigation.navigate('Welcome')}>Criar conta</Button>
                                                    <TouchableWithoutFeedback onPress={() => nav.navigate('Login')}>
                                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                                            <Text style={styles.cardHasAccountText}>Já tem uma conta?</Text>
                                                            <Text style={styles.cardLoginText}>Login</Text>
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                                </Card>
                                            );
                                        }
                                }}/>
                        </View>

                        <View style={styles.bottomNavContainer}>
                            <Button style={styles.bottomNavItem} _text={styles.bottomNavItemText} 
                                onPress={() => carousel.current._snapToItem(carousel.current._getPositionIndex(index - 1))}>Voltar</Button>
                            <Button style={styles.bottomNavItem} _text={styles.bottomNavItemText} 
                                onPress={() => carousel.current._snapToItem(carousel.current._getPositionIndex(index + 1))}>Pular</Button>
                        </View>


                        <Pagination
                            style={{borderColor: 'black', borderWidth: 2}}
                            dotsLength={4}
                            activeDotIndex={index}
                            carouselRef={carousel}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                borderColor: '#ff4444',
                                marginHorizontal: 0,
                                backgroundColor: '#ff4444'
                            }}
                            tappableDots={true}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}/>
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
    dividerText: {
        color: '#dedede',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 18
    },
    cardTitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff',
    },
    cardHasAccountText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#C0C0C0',
        marginTop: 18
    },
    cardLoginText: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#1C7793',
        marginTop: 18,
        marginLeft: 3
    },
    bottomNavContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20
    },
    bottomNavItem: {
        backgroundColor: 'transparent',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0
    },
    bottomNavItemText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff4444'
    }
  });