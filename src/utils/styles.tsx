import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// Colors
import colors from "./colors"

const styles = StyleSheet.create({
    safeView:{
        flex: 1
    },
    headTxt: {
        fontSize: 24, 
        fontFamily: 'Poppins_500Medium', 
        color: '#fff'
    },

    // Splash Styles
    spMidTxt: {
        color: '#fff', 
        fontSize: 48, 
        fontFamily: 'Poppins_700Bold'
    },
    spBox: {
        position: 'absolute', 
        bottom: 0, 
        padding: 24, 
        borderRadius: 32, 
        backgroundColor: '#ffffff50', 
        width: wp('70%'), 
        margin: 24, 
        marginBottom: 40 
    },
    spBoxTxt: {
        color: '#fff', 
        fontSize: 16, 
        fontFamily: 'Poppins_400Regular', 
    },
    spBtn: {
        width: '100%', 
        padding: 16, 
        backgroundColor: '#fff', 
        marginTop: 32, 
        borderRadius: 16
    },
    spBtnTxt: {
        textAlign: 'center', 
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: 18
    },

    // Home Styles
    headBar: { 
        padding: 24, 
        borderBottomWidth: 1, 
        borderBottomColor: '#00000020', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%' 
    },
    flex: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    }
})

export default styles
