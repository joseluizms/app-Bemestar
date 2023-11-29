import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

export const Home = () => {
    let [fontsLoaded] = useFonts({
        'Roboto': require('../../fonts/Roboto-regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View><Text>Carregando...</Text></View>; // ou algum outro indicador de carregamento
    }

    return (
        <LinearGradient colors={['#E1F2E0', '#8DDCE5', '#114A55']} style={styles.container}>
            <Text style={styles.texto1}>Bem estar em </Text>
            <Text style={styles.numero2}>5</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
         // para centralizar o conteúdo
    },
    texto1: {
        marginTop: 90,
        fontFamily: 'Roboto',
        fontSize: 20, // Ajuste conforme necessário
        color: '#000', // Ajuste a cor conforme necessário
    },
    numero2: {
        fontFamily: 'Roboto',
        fontSize: 20, // Ajuste conforme necessário
        color: '#000', // Ajuste a cor conforme necessário
    }
});

export default Home;
