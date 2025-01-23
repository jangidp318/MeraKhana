import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppStackNavigator from './navigators/AppStackNavigator';
import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import SplashScreen from './screens/SplashScreen';

const RootStack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
        {isAuthenticated
          ? <RootStack.Screen name='App' component={AppStackNavigator} options={{ headerShown: false }} />
          : <RootStack.Screen name='Auth' component={AuthStackNavigator} options={{ headerShown: false }} />}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App