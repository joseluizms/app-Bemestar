// src/components/Timer.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const Timer = () => {
    const navigation = useNavigation();
    const imagePath = require('../assets/img/perfil.png'); // Ajuste o caminho conforme necessário

    const handleStart = (task) => {
        navigation.navigate('TimerScreen', { task, imagePath });
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={imagePath}/>
            </View>
            <View style={styles.objectives}>
                <Text style={styles.objectivesText}>Objetivos</Text>
            </View>
            <View style={styles.taskIconContainer}>
                {/* Botão para Meditar */}
                <TouchableOpacity onPress={() => handleStart('Meditar')} style={styles.taskButton}>
                    <Icon name="universal-access" size={30} color="#000" />
                    <Text style={styles.taskText}>Meditar</Text>
                </TouchableOpacity>
                {/* Botão para Yoga */}
                <TouchableOpacity onPress={() => handleStart('Yoga')} style={styles.taskButton}>
                    <Icon name="child" size={30} color="#000" />
                    <Text style={styles.taskText}>Yoga</Text>
                </TouchableOpacity>
                {/* Botão para Ler */}
                <TouchableOpacity onPress={() => handleStart('Ler')} style={styles.taskButton}>
                    <Icon name="book" size={30} color="#000" />
                    <Text style={styles.taskText}>Ler</Text>
                </TouchableOpacity>
                {/* Botão para Alongar */}
                <TouchableOpacity onPress={() => handleStart('Alongar')} style={styles.taskButton}>
                    <Icon name="expand" size={30} color="#000" />
                    <Text style={styles.taskText}>Alongar</Text>
                </TouchableOpacity>
                {/* Botão para Respirar */}
                <TouchableOpacity onPress={() => handleStart('Respirar')} style={styles.taskButton}>
                    <Icon name="cloud" size={30} color="#000" />
                    <Text style={styles.taskText}>Respirar</Text>
                </TouchableOpacity>
                {/* Botão para Caminhar */}
                <TouchableOpacity onPress={() => handleStart('Caminhar')} style={styles.taskButton}>
                    <Icon name="street-view" size={30} color="#000" />
                    <Text style={styles.taskText}>Caminhar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        borderRadius: 100,
        width: 200,
        height: 200,
    },
    objectives: {
        marginBottom: 30,
    },
    objectivesText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    taskIconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    taskButton: {
        borderRadius: 50,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#8DDCE5',
    },
    taskText: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Timer;
