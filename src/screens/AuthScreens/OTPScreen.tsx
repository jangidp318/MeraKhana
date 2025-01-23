import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { OtpInput } from "react-native-otp-entry";
import GlobalColors from '../../styles/GlobalColors';
import Header from '../../components/Header';
import Button from '../../components/buttons/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const OTPScreen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Header
                title='OTP Verification'
                leftItem={
                    <Icon
                        name="arrow-back"
                        onPress={() => { }}

                    />
                }
                titleStyle={{ color: GlobalColors.textSecondary }}
                rightItem={
                    <TouchableOpacity>
                        <Text>Skip</Text>
                    </TouchableOpacity>
                }
            />
            <View style={{ alignItems: 'center', paddingVertical: 30 }}>
                <Text style={styles.text}>We have sent a otp code to</Text>
                <Text style={[styles.text, { color: GlobalColors.textPrimary }]}>+91 98765432210</Text>
            </View>
            <OtpInput
                numberOfDigits={6}
                onTextChange={(text) => console.log(text)}
                theme={{
                    pinCodeContainerStyle: {
                        backgroundColor: 'white',
                        width: 50,
                        height: 50,
                        borderRadius: 25
                    },
                    focusedPinCodeContainerStyle: {
                        borderColor: 'black',
                        borderWidth: 2,
                    },
                    filledPinCodeContainerStyle: {
                        borderColor: 'black',
                        borderWidth: 2,
                    },
                    pinCodeTextStyle: {
                        fontSize: 18
                    }
                }}
            />
            <View style={{
                justifyContent: 'center', paddingVertical: 30, flexDirection: 'row',
            }}>
                <Text style={styles.text}>Didn't get the OTP? </Text>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={[styles.text, { color: GlobalColors.primary }]}> Resend SMS</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}>
                <Button
                    title='Other methods'
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default OTPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 16,
        color: GlobalColors.textSecondary,
        textAlign: 'center'
    }
}) 