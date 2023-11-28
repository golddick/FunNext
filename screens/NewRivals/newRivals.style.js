import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite,
    },
    wrapper:{
        flex:1,
        backgroundColor:COLORS.lightWhite,
    },
    upperRow:{
        flexDirection:'row',
        width:SIZES.width -50,
        marginHorizontal:SIZES.large,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.large,
        zIndex:9999,
        top:SIZES.large
    },
    headingText:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:5
    }
})

export default styles;