import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/AppScreens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AppStack = createBottomTabNavigator();

const AppStackNavigator = () => (
    <AppStack.Navigator initialRouteName='HomeScreen'>
        <AppStack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
    </AppStack.Navigator>
)

export default AppStackNavigator