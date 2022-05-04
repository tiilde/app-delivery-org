import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './src/routes/Index';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#38A69D" />
            <AppRoutes/>
        </NavigationContainer>
    );
}
