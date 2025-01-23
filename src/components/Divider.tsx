import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import React from 'react'

type DividerProps = | {
    type: 'titled'
    title: string,
    dividerContainer?: ViewStyle,
    dividerLine?: ViewStyle,
    titleStyles?: TextStyle,
} | {
    type: 'normal'
    title?: never,
    dividerContainer?: ViewStyle,
    dividerLine?: ViewStyle,
    titleStyles?: TextStyle,
}


const Divider = ({ type, title, dividerContainer, dividerLine, titleStyles }: DividerProps) => {
    return (
        <View style={[styles.dividerContainer, dividerContainer]}>
            <View style={[styles.dividerLine, dividerLine]} />
            {title && <Text style={[styles.titleStyles, titleStyles]}>{title}</Text>}
            {title && <View style={[styles.dividerLine, dividerLine]} />}
        </View>
    )
}

export default Divider

const styles = StyleSheet.create({
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'lightgrey',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    titleStyles: {
        color: 'grey',
        fontSize: 18,
        fontWeight: '600',
    }
})