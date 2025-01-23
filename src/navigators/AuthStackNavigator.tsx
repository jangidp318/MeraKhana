import LoginScreen from "../screens/AuthScreens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import OTPScreen from "../screens/AuthScreens/OTPScreen";

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => (
    <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <AuthStack.Screen name='OTPScreen' component={OTPScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
)