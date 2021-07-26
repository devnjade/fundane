import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../utils/colors'

import styles from '../../utils/styles'


export default function Splash({ navigation: { navigate } }: any) {
    return (
        <LinearGradient
            colors={[colors.black, '#1B205B', '#DF1456', '#FCA501']}
            start={{ x: 0, y: 0.2 }}
            style={{ flex: 1 }}
        >
            <StatusBar style="light" />
            <SafeAreaView style={[styles.safeView, { position: 'relative' }]}>
                <View style={{ padding: 24, width: '100%' }}>
                    <Text style={styles.headTxt}>Fundane.</Text>
                </View>
                <View style={{ padding: 24, }}>
                    <Text style={styles.spMidTxt}>Trade</Text>
                    <Text style={[styles.spMidTxt, { marginTop: -10 }]}>Like a Pro.</Text>
                </View>
                <View style={styles.spBox}>
                    <Text style={ styles.spBoxTxt }>Register</Text>
                    <Text style={[styles.spBoxTxt, { marginTop: 8 }]}>Create an account and get $100 headset</Text>
                    <TouchableOpacity style={styles.spBtn} onPress={() => navigate('Home')}>
                        <Text style={styles.spBtnTxt}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}
