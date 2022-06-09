import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';

function Home({ navigation }) {

    // armazenando dados
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // inicializando a função que recupera os dados do usuário

    useEffect(() => {
        getUser();
    }, []);

    // função que recupera os dados
    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            const parsedUser = JSON.parse(user);
            setEmail(parsedUser.email);
        }
        catch (error) {

            Alert.alert(error);
        }
    }    
}