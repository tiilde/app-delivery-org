import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// import Splash from "../views/Splash";
import BemVindo from "../views/BoasVindas/BemVindo";
import Login from "../views/Login/Login"; 


const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Splash" component={Splash} /> */}
            <Stack.Screen 
                name="BoasVindas" 
                component={BemVindo} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}