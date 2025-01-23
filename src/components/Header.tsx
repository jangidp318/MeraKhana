import { View, Text, StyleSheet, TextStyle } from 'react-native'
import React from 'react'

type HeaderProps = {
    title: string;
    leftItem?: any;
    rightItem?: any;
    titleStyle?: TextStyle
}

const Header = ({ title, leftItem, rightItem, titleStyle }: HeaderProps) => {
    return (
        <View style={styles.container}>
            {leftItem}
            {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
            {rightItem}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    }
})