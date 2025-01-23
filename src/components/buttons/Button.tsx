import { View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import GlobalColors from '../../styles/GlobalColors';

type ButtonProps = {
    onPress: () => void;
    title: string
    titleStyle?: TextStyle
    buttonStyle?: ViewStyle
}


const Button = ({ title, titleStyle, buttonStyle, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={[styles.buttonContainerStyle, buttonStyle]} onPress={onPress}>
            <Text style={[styles.buttonTextStyle, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonContainerStyle: {
        backgroundColor: GlobalColors.primary,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        shadowColor: GlobalColors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
    },
    buttonTextStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    }
})