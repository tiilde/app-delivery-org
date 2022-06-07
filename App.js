import * as React from "react";
import { StatusBar, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import BemVindo from "./src/views/BoasVindas/BemVindo";
import Login from "./src/views/Login/Login";



const Stack = createNativeStackNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#38A69D" />
            <Stack.Navigator>
                <Stack.Screen
                    name="BoasVindas"
                    component={BemVindo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}
