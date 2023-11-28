import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../constants';

const styles = StyleSheet.create({
textStyle:{
fontFamily:'bold',
fontSize:20,
},
appBarContainer:{
    marginHorizontal:22,
    marginTop: SIZES.xSmall
},
appBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
location:{
    fontFamily:"bold",
    fontSize:SIZES.medium,
    color:COLORS.gray
},
cartCount:{
    position:'absolute',
    bottom:16,
    height:16,
    width:16,
    borderRadius:8,
    alignItems:'center',
    backgroundColor:'purple',
    justifyContent:'center',
    zIndex:9999
}, 
countNum:{
    fontFamily:'regular',
    fontSize:10,
    fontWeight:600,
    color:COLORS.lightWhite
}
})

export default styles;