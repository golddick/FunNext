import { StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../../../constants'


const styles = StyleSheet.create({
cardContainer:{
    width:180,
    height:240,
    marginEnd:10,
    marginStart:5,
    borderRadius:SIZES.medium,
    backgroundColor:COLORS.lightpurple,
    marginHorizontal:SIZES.medium,
    
},
imgContainer:{
    flex:1,
    width:170,
    marginLeft:SIZES.small/2,
    marginTop:SIZES.small/2,
    borderRadius:SIZES.small,
    overflow:'hidden',
},
image:{
    aspectRatio:1,
    resizeMode:'cover'
},
details:{
    padding:SIZES.small
},
title:{
    fontFamily:'bold',
    fontSize:SIZES.large,
    marginBottom:2,
    color:COLORS.lightWhite
},
supplier:{
    fontFamily:'regular',
    fontSize:SIZES.small,
    marginBottom:2,
    color:COLORS.gray
},
price:{
    fontFamily:'bold',
    fontSize:SIZES.medium,
    color:COLORS.offwhite

},
addBtn:{
position:'absolute',
bottom:SIZES.xSmall,
right:SIZES.xSmall
}
})

export default styles;