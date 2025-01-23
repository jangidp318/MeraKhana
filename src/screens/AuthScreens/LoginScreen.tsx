import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../styles/GlobalStyles'
import Button from '../../components/buttons/Button'
import Divider from '../../components/Divider'
import PhoneInput from 'react-native-international-phone-number'
import GlobalColors from '../../styles/GlobalColors'
import IconButton from '../../components/buttons/IconButton'

const LoginScreen = ({ navigation }: any) => {

    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.imageBackgroundView}>
                <ImageBackground
                    source={require('../../assets/images/LoginScreenBG.png')}
                    style={styles.imageBackground}
                    resizeMode="cover">
                    <SafeAreaView />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
                        <Button
                            title=''
                            onPress={() => { }}
                            titleStyle={{
                                color: 'white',
                            }}
                            buttonStyle={{
                            }}
                        />
                        <Button
                            title='Skip'
                            onPress={() => { }}
                            titleStyle={{
                                color: 'white',
                            }}
                            buttonStyle={{
                                paddingHorizontal: 15,
                                paddingVertical: 5,
                                borderRadius: 20,
                                backgroundColor: 'black'
                            }}
                        />
                    </View>

                </ImageBackground>
            </View>
            <View style={{ marginVertical: 30 }}>
                <Text style={styles.slogan}>Mera Khana {'\n'}Food Delivery App</Text>
            </View>
            <Divider type='titled' title='Login' />

            <View style={{ width: '100%', padding: 24 }}>
                <PhoneInput
                    value={inputValue}
                    onChangePhoneNumber={(phoneNumber) => setInputValue(phoneNumber)}
                    selectedCountry={selectedCountry}
                    onChangeSelectedCountry={(country) => setSelectedCountry(country)}
                    placeholder='987 654 3210'
                    phoneInputStyles={{
                        flagContainer: styles.flagContainer,
                        container: styles.phoneTextInputcontainer,
                        flag: styles.flag,
                        callingCode: styles.callingCode,
                        divider: styles.divider,
                        caret: styles.caret
                    }}
                />
            </View>
            <View>
                <Button title='Continue' onPress={() => { navigation.navigate('OTPScreen') }} />
            </View>

            <Divider type='titled' title='or' dividerContainer={{ marginVertical: 15 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <IconButton
                    icon={
                        <View>
                            <Image source={require('../../assets/images/google-logo.png')} resizeMode='contain' style={{
                                height: 50,
                                width: 50,
                                borderRadius: 25
                            }} />
                        </View>
                    }
                    onPress={() => { }}
                />
                <IconButton
                    icon={
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/apple-logo.png')} resizeMode='contain' style={{
                                height: 34,
                                width: 34,
                                borderRadius: 25
                            }} />
                        </View>
                    }
                    onPress={() => { }}
                />
                <IconButton
                    icon={
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/mail-logo.png')} resizeMode='contain' style={{
                                height: 25,
                                width: 25,
                                tintColor: GlobalColors.primary
                            }} />
                        </View>
                    }
                    onPress={() => { }}
                />
            </View>

        </View >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageBackground: {
        height: 350,
        width: '100%',
        borderRadius: 20,
    },
    imageBackgroundView: {
        height: 350,
        width: '100%',
        overflow: 'hidden',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
    },
    slogan: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
    },
    flagContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingRight: 10,
        paddingLeft: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        shadowColor: GlobalColors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
    },
    phoneTextInputcontainer: {
        backgroundColor: 'white',
        borderWidth: 0,
        height: 50,
        borderRadius: 25,
        paddingHorizontal: 7,
        paddingVertical: 7,
        shadowColor: GlobalColors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
    },
    flag: {
        padding: 0,
        borderRadius: 20,
    },
    callingCode: {
        borderRadius: 20,
        fontSize: 14
    },
    divider: {
        marginLeft: 5,
        marginRight: 5,
        display: 'none'
    },
    caret: {
        display: 'none'
    }
})