import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './BottomTabNavigator';

const AppStack = createStackNavigator();

const AppStackNavigator = ({ onLogout }: any) => {
    return (
        <AppStack.Navigator initialRouteName="BottomTabNavigator">
            <AppStack.Screen
                name="BottomTabNavigator"
                options={{ headerShown: false }}
            >
                {(props) => <BottomTabNavigator {...props} onLogout={onLogout} />}
            </AppStack.Screen>
        </AppStack.Navigator>
    );
};

export default AppStackNavigator;