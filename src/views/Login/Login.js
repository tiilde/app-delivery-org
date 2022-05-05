import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Login() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem vindo(a)</Text>
            </Animatable.View>
            <Animatable.View style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite seu e-mail"
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Digite sua senha"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonRegister}>Não possui cadastro? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#384169',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#DAEFE0',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',  
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 5,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#384169',
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
           
    },
    registerText: {
        color:'#384169',
    }


});