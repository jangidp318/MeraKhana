import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalColors from '../../styles/GlobalColors'
import { green } from 'react-native-reanimated/lib/typescript/Colors'

type IconButtonProps = {
    icon: any;
    onPress: () => void
}


const IconButton = ({ icon, onPress }: IconButtonProps) => {
    return (
        <TouchableOpacity style={[styles.container]} onPress={onPress}>
            {icon}
        </TouchableOpacity>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        shadowColor: GlobalColors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
    }
})