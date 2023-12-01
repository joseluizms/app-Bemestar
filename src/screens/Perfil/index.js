import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

export const Perfil = () => {
    let [fontsLoaded] = useFonts({
        'Roboto': require('../../fonts/Roboto-regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View><Text>Carregando...</Text></View>; // ou algum outro indicador de carregamento
    }

    return (
        <LinearGradient colors={['#E1F2E0', '#8DDCE5', '#114A55']} style={styles.container}>
            <View style= {styles.topContent}>
            <Text style={styles.texto1}>Bem estar em </Text>
            <Text style={styles.numero2}>5</Text>
            </View>
            <View style={styles.iniciarContainer}>
                <Text style={styles.iniciar}>Começar</Text>
            </View>

            
        </LinearGradient>
       
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        
         // para centralizar o conteúdo
    },
    topContent:{
        flex: 1,
        
        alignItems: 'center',
    },
    texto1: {
        padding: 30,
        marginTop: 150,
        fontFamily: 'Roboto',
        fontSize: 40, // Ajuste conforme necessário
        color: '#114A55', // Ajuste a cor conforme necessário
    },
    numero2: {
        fontFamily: 'Roboto',
        fontSize: 55, // Ajuste conforme necessário
        color: '#114A55', // Ajuste a cor conforme necessário
    },
    iniciarContainer: {
       
        justifyContent: 'flex-end',
        alignItems: 'center', // Para centralizar horizontalmente
        marginBottom: 120, // Espaço na parte inferior
        borderWidth: 3,
        borderColor: '#8DDCE5',
        backgroundColor: '#8DDCE5',
        padding: 5,
        borderRadius:30,
    },
    iniciar: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color:'#114A55'
        
    }
});

export default Perfil;
