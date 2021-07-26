import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../utils/colors'
import { Feather } from '@expo/vector-icons'

import styles from '../../utils/styles'
import { ScrollView } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Home() {
    return (
        <LinearGradient
            colors={['#FFFFFF', '#B0DDE8', '#F7E2E7', '#FDB9D2', '#FDC5C1']}
            start={{ x: 0, y: 0.2 }}
            style={{ flex: 1 }}
        >
            <StatusBar style="dark" />
            <SafeAreaView style={ styles.safeView }>
                <View style={ styles.headBar }>
                    <Text style={[styles.headBar, { color: colors.black }]}>Fundane.</Text>
                    <View style={ styles.flex }>
                        <TouchableOpacity style={{ marginRight: 24 }}>
                            <Feather name="search" size={28}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ }}>
                            <Feather name="user" size={28}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, position: 'relative' }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 24 }}>
                            <Text style={{ fontSize: 16, color: '#00000050', fontFamily: 'Poppins_400Regular' }}>Top perform</Text>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ marginRight: 10, fontSize: 16, color: '#00000050', fontFamily: 'Poppins_400Regular' }}>Today</Text>
                                <Feather name="chevron-down" size={16} color="#00000050" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 24 }}>
                            <View style={{ paddingBottom: 24, borderBottomWidth: 1, borderBottomColor: colors.lightPink, marginBottom: 24 }}>
                                <Text style={{ fontSize: 50, fontFamily: 'Poppins_300Light' }}>Bitcoin</Text>
                                <Text style={{ fontSize: 30, fontFamily: 'Poppins_300Light' }}>$34132.60</Text>
                            </View>
                            <View style={{ paddingBottom: 24, borderBottomWidth: 1, borderBottomColor: colors.lightPink, marginBottom: 24 }}>
                                <Text style={{ fontSize: 50, fontFamily: 'Poppins_300Light' }}>Ethereum</Text>
                                <Text style={{ fontSize: 30, fontFamily: 'Poppins_300Light' }}>$2,003.00</Text>
                            </View>
                            <View style={{ paddingBottom: 24, borderBottomWidth: 1, borderBottomColor: colors.lightPink, marginBottom: 24 }}>
                                <Text style={{ fontSize: 50, fontFamily: 'Poppins_300Light' }}>Tez</Text>
                                <Text style={{ fontSize: 30, fontFamily: 'Poppins_300Light' }}>$2.42</Text>
                            </View>
                            <View style={{ paddingBottom: 24, borderBottomWidth: 1, borderBottomColor: colors.lightPink, marginBottom: 24 }}>
                                <Text style={{ fontSize: 50, fontFamily: 'Poppins_300Light' }}>Tether</Text>
                                <Text style={{ fontSize: 30, fontFamily: 'Poppins_300Light' }}>$0.98</Text>
                            </View>
                            <View style={{ paddingBottom: 24, borderBottomWidth: 1, borderBottomColor: colors.lightPink, marginBottom: 24 }}>
                                <Text style={{ fontSize: 50, fontFamily: 'Poppins_300Light' }}>$WELL</Text>
                                <Text style={{ fontSize: 30, fontFamily: 'Poppins_300Light' }}>$204.00</Text>
                            </View>
                        </View>
                        <View style={{ margin: 24, marginTop: 0 }}>
                            <View style={{ padding: 24, backgroundColor: "#000", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 24 }}>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: wp('5%'), fontFamily: 'Poppins_600SemiBold' }}>Predict The Market</Text>
                                    <Text style={{ maxWidth: wp('50%'), color: '#C49640', marginTop: 8, fontFamily: 'Poppins_400Regular' }}>Now you can also predict the market and get $10 for every correct prediction</Text>
                                </View>
                                <TouchableOpacity>
                                    <Feather name="arrow-right" size={40} color='#fff' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}
