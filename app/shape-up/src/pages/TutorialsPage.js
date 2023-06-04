import React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Box, Text } from "native-base";
import ListaVideos from "../Components/ListaVideos"


export function TutorialsPage() {
    const name = `Marcos Alberto`
    const exec = 'Exercícios para Braço'
    const exec2 = 'Exercícios para Perna'
    return (

        <Box h='100%'>
            <ScrollView width='100%'>
                <Box bg="secondary.600" style={styles.containerGeral}>
                    <Text style={styles.propTxt}>{exec}</Text>
                    <ListaVideos nomeex='Flexão' nivel='Nível Fácil' imagePath='https://img.freepik.com/fotos-gratis/jovem-esportista-poderoso-treinamento-flexoes-sobre-parede-escura_176420-537.jpg?w=1380&t=st=1684794760~exp=1684795360~hmac=65720d7266f3e0f0a7fd4cb465078e01aa9e631e291896adcefc142e9d60366b'></ListaVideos>
                    <ListaVideos nomeex='Prancha' nivel='Nível Fácil' imagePath='https://img.freepik.com/fotos-gratis/treino-em-casa_144627-44329.jpg?w=1380&t=st=1684797546~exp=1684798146~hmac=7e8ccf7e2ccc6ba58008ecae6550c96880ec544352fb983a7bd47ddf8f929057'></ListaVideos>
                    <ListaVideos nomeex='Remada-Unilateral' nivel='Nível Médio' imagePath='https://img.freepik.com/fotos-gratis/mulher-jovem-levantamento-dumbbell-em-ginasio_23-2147789558.jpg?w=1380&t=st=1684795650~exp=1684796250~hmac=d35fc142b862ca0773921b10dfb6b819dd54292f1ba82f51135428b8ec7d4578'></ListaVideos>
                    <Text style={styles.propTxt}>{exec2}</Text>
                    <ListaVideos nomeex='Agachamento' nivel='Nível Médio' imagePath='https://img.freepik.com/fotos-gratis/mulher-de-musculacao-forte-e-fitness-em-roupas-esportivas-fazendo-treinamento-de-salto-no-ginasio_342744-5.jpg?w=1380&t=st=1684796353~exp=1684796953~hmac=11df5dd39758776051ccd6b128782f23bcf07d2656cbccdd658d9cca94ac8e82'></ListaVideos>
                    <ListaVideos nomeex='Passada' nivel='Nível Difícil' imagePath='https://img.freepik.com/fotos-gratis/mais-forte-jovem-atleta-caucasiano-musculoso-praticando-estocadas-no-ginasio-com-barra-modelo-masculino-fazendo-exercicios-de-forca-treinando-a-parte-inferior-do-corpo-bem-estar-estilo-de-vida-saudavel-conceito-de-musculacao_155003-36806.jpg?w=1380&t=st=1684796239~exp=1684796839~hmac=234283f1a87b3cd2d18ff3ce2110bc1632a6162309446a4fcf34c91c2d29b3ac'>
                    </ListaVideos>
                </Box>
            </ScrollView>

        </Box>



    )


}

const styles = StyleSheet.create({
    containerGeral: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    propTxt: {
        marginTop: 20,
        marginBottom: 20,
        left: 20,
        color: '#FFF',
        fontSize: 15,
        width: '100%'

    }
})
