import {  StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../../constants'
const styles = StyleSheet.create({
welcomeContainer:{
    width:'100%',

},
welcomeTxT:(color,top)=>({
fontFamily:'bold',
fontSize:SIZES.xxLarge-5,
marginTop:top,
color:color,
marginHorizontal:SIZES.small
}),
searchContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    marginVertical:SIZES.medium,
    height:50,
    marginHorizontal:12
 
},
searchIcon:{
    marginHorizontal:10,
    color:COLORS.gray,
    marginTop:SIZES.small

},
searchWrapper:{

    flex:1,
    backgroundColor:COLORS.secondary,
    marginRight:SIZES.small,
    borderRadius:SIZES.small
},
searchInput:{
    fontFamily:'regular',
    width:'100%',
    height:'100%',
    paddingHorizontal:SIZES.small,
},
searchBtn:{
    width:50,
    height:'100%',
    borderRadius:SIZES.medium,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.primary
}


})

export default styles