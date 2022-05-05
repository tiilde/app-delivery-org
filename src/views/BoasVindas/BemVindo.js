import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';


export default function BemVindo() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <ImageBackground
                    source={require("../../assets/bg-1.png")}
                    style={styles.bg}
                    resizeMode="cover"
                    blurRadius={10}
                >
                    <Animatable.Image
                        animation="flipInX"
                        source={require("../../assets/organic-logo2.png")}
                        style={styles.logo}
                        resyzeMode="contain"
                    />
                    <Animatable.View
                        delay={600}
                        animation="fadeInUp"
                        style={styles.containerForm}
                    >
                        <Text style={styles.title}>
                            Bem vindo(a) ao Organic Market, seu delivery de alimentos orgânicos.                    
                        </Text>
                        <Text style={styles.text}>Entre na sua conta</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    bg: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    logo:{
        alignSelf: "center",
        width: 310,
        height: 300,
        marginTop: 50,
        marginBottom: 50,
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#DAEFE0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingStart: '8%',
        paddingEnd: '8%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#476079',   
    },
    text: {
        marginTop: 14,
        fontSize: 16,
        color: '#384169',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#384169',
        fontWeight: 'bold',
    },
})