import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStackNavigator from './navigators/AppStackNavigator';
import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import SplashScreen from './screens/SplashScreen';
import { checkIsLoggedIn } from './utils/functions/checkIsLoggedIn'; // Utility to check login status

const RootStack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null indicates loading state

  useEffect(() => {
    const initializeLoginState = async () => {
      const loggedIn = await checkIsLoggedIn();
      setIsLoggedIn(loggedIn);
    };
    initializeLoginState();
  }, []);

  const handleLogin = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  if (isLoggedIn === null) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <RootStack.Screen name="App">
            {(props) => <AppStackNavigator {...props} onLogout={handleLogout} />}
          </RootStack.Screen>
        ) : (
          <RootStack.Screen name="Auth">
            {(props) => <AuthStackNavigator {...props} onLogin={handleLogin} />}
          </RootStack.Screen>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;