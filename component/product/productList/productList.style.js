import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../../constants"

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
       alignItems:"center",
       justifyContent:'center',
        paddingTop:SIZES.xxLarge,
       paddingLeft:SIZES.small/2,
    },
    separator:{
        height:15
    }
})

export default styles;