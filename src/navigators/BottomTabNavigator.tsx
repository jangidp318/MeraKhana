import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/AppScreens/HomeScreen";

const BottomTabStack = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    <BottomTabStack.Navigator>
        <BottomTabStack.Screen name='HomeScreen' component={HomeScreen} />
    </BottomTabStack.Navigator>
}