import { StyleSheet } from "react-native";
import { COLORS, SIZES,SHADOWS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:SIZES.small,
        flexDirection:'row',
        padding:SIZES.medium,
        borderRadius:SIZES.small,
        ...SHADOWS.medium,
        shadowColor:COLORS.lightWhite

    },
    image:{
        width:70,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        justifyContent:'center',
        alignContent:'center',
    },
    productImg:{
        width:"100%",
        height:65,
        borderRadius:SIZES.small,
        resizeMode:'cover'

    },
    textContainer:{
        flex:1,
        marginHorizontal:SIZES.medium
    },
    productTitle:{
        fontFamily:'bold',
        color:COLORS.primary,
        fontSize:SIZES.medium
    },
    productSupplier:{
        fontFamily:'regular',
        color:COLORS.lightpurple,
        fontSize:SIZES.medium
    },
    productPrice:{
        fontFamily:'regular',
        color:COLORS.gray,
        fontSize:SIZES.medium
    },

})

export default styles;