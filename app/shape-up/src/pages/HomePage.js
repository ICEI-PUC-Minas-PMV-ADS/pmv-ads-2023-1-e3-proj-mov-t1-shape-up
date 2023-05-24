import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";
import Header from "../Components/Header"
import Lista from "../Components/Lista"


function Saudacao() {
    const saudacao = 'Olá,'
    return saudacao

}



export function HomePage() {
    const name = "Marcos Alberto"

    return (
        <ScrollView>
            <View>
                <Header name={name} ></Header>
                <View style={styles.container}>
                    <Text style={styles.contentTxt}>{Saudacao()} {name}</Text>
                    <Text style={styles.contentTxt}>Por onde vamos começar?</Text>
                    <View style={styles.containerLista}>
                        <Lista desc="Treino de Peito" numEx={"5 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/fisiculturista-poderoso-atraente-esta-fazendo-exercicios-em-aparelhos-de-treinamento-no-ginasio-ensolarado_613910-20342.jpg?w=1380&t=st=1683483248~exp=1683483848~hmac=c734f50c53dd05869161941519e4f04de49bf7507274714be097452d773eac24'></Lista>
                        <Lista desc="Treino de Costas" numEx={"7 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/homem-malhando-na-academia_144627-38801.jpg?w=1380&t=st=1683483540~exp=1683484140~hmac=315e904e7d2066847242a455532a3b690a7d195630e1cfecfc1ae9cbb3b4b53b'></Lista>
                        <Lista desc="Treino de Pernas" numEx={"8 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/fechar-o-treino-de-kettlebells-no-ginasio_23-2149307727.jpg?w=1380&t=st=1683459788~exp=1683460388~hmac=5d660029a896250b5444a4f61cedd5c5b48cc41aececa003de69a61a4b35ed3c'></Lista>
                        <Lista desc="Treino de Braços" numEx={"6 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/homem-forte-treinando-na-academia_1303-23478.jpg?w=1380&t=st=1683333513~exp=1683334113~hmac=3c6c4e5d32331cae27b5aaf51cc2f8b2dd89780632f361c4f40022ee28f4d7d0'></Lista>
                        <Lista desc="Treino de Ombros" numEx={"5 exercícios"} imagePath='https://www.bodybuilding.com/images/2021/june/best-workouts-to-get-bigger-shoulders-header-960x540.jpg'></Lista>
                        <Lista desc="Treino de Abdômen" numEx={"4 exercícios"} imagePath='https://img.freepik.com/fotos-gratis/homem-musculoso-fazendo-abdominais-no-chao_651396-1595.jpg?w=1380&t=st=1683483777~exp=1683484377~hmac=68fcafc22edbc9f476923cd44f3627068540e8c0b804d10b4ee50aa8f0b9a3bf'></Lista>
                    </View>
                </View>
            </View>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202020',
        height: '100%',
        paddingTop: 15,
        alignItems: 'center'

    },

    containerLista: {
        marginTop: 30,
        width: '100%',
        flex: 1,
        alignItems: 'center'
    },

    contentTxt: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,

    },

})

