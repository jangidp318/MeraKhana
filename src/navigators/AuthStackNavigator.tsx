import React from "react";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import OTPScreen from "../screens/AuthScreens/OTPScreen";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export const AuthStackNavigator = ({ onLogin }: any) => (
    <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen
            name="LoginScreen"
            options={{ headerShown: false }}
        >
            {(props) => <LoginScreen {...props} onLogin={onLogin} />}
        </AuthStack.Screen>
        <AuthStack.Screen
            name="OTPScreen"
            options={{ headerShown: false }}
        >
            {(props) => <OTPScreen {...props} onLogin={onLogin} />}
        </AuthStack.Screen>
    </AuthStack.Navigator >
);