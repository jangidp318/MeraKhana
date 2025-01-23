import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeliveryTab from "../screens/AppScreens/DeliveryTab";
import DineInTab from "../screens/AppScreens/DineInTab";
import { Image, View, Animated } from "react-native";
import GlobalColors from "../styles/GlobalColors";

const BottomTabStack = createBottomTabNavigator();

export const BottomTabNavigator = ({ onLogout }: any) => {
    return (
        <BottomTabStack.Navigator
            initialRouteName="DeliveryTab"
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                    alignItems: "center",
                    borderRadius: 50,
                    position: "absolute",
                    bottom: 30,
                    marginHorizontal: 20,
                    paddingTop: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 4, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    elevation: 5,
                    backgroundColor: "white",
                    // borderWidth: 3,
                },
            }}
        >
            <BottomTabStack.Screen
                name="DeliveryTab"
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={[{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 25,

                                }, focused && {
                                    paddingHorizontal: '210%',
                                    paddingVertical: 15,
                                    shadowColor: 'black',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3.84,
                                    backgroundColor: 'white',
                                }]}
                            >
                                <Animated.Image
                                    source={require("../assets/images/delivery-logo-removebg.png")}
                                    resizeMode="contain"
                                    tintColor={focused ? GlobalColors.primary : "grey"}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        transform: [{ scale: focused ? 1.2 : 1 }],
                                    }}
                                />
                            </View>
                        );
                    },
                    tabBarShowLabel: false,
                }}
            >
                {(props) => <DeliveryTab {...props} onLogout={onLogout} />}
            </BottomTabStack.Screen>

            <BottomTabStack.Screen
                name="DineInTab"
                component={DineInTab}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={[{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 25,

                                }, focused && {
                                    paddingHorizontal: '210%',
                                    paddingVertical: 15,
                                    shadowColor: 'black',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3.84,
                                    backgroundColor: 'white',
                                }]}
                            >
                                <Animated.Image
                                    source={require("../assets/images/dine-in-logo.png")}
                                    resizeMode="contain"
                                    tintColor={focused ? GlobalColors.primary : "grey"}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        transform: [{ scale: focused ? 1.2 : 1 }],
                                    }}
                                />
                            </View>
                        );
                    },
                    tabBarShowLabel: false,
                }}
            />
        </BottomTabStack.Navigator>
    );
};