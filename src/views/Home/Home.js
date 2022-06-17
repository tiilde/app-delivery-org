import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default function Home({ navigation }) {

    // armazenando dados
    const [nome, setNome] = useState('');

    // inicializando a função que recupera os dados do usuário

    useEffect(() => {
        // recuperar nome no async storage
        getUser();
    }, []);

    // função que recupera os dados
    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('usuario');
            const parsedUser = JSON.parse(user);
            setNome(parsedUser.nome);
        }
        catch (error) {

            console.log(error);
        }
    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Testando tela Home</Text>
            <Text>Nome: {nome} </Text>
            <Button title='Voltar' onPress={() => navigation.navigate('BoasVindas')} />
        </View>
    )
}

