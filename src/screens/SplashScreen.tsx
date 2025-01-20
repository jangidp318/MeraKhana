import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Home");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require("./assets/zomato_logo.png")} 
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.tagline}>Discover the best food around you!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fc3c44",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    tagline: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default SplashScreen;