import {  StyleSheet } from 'react-native'
import { COLORS , SIZES } from '../constants'

const styles = StyleSheet.create({

productContainer:{
    flex:1,
    backgroundColor:COLORS.lightWhite,
},
upperRow:{
    marginHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute',
    top:SIZES.xLarge+20,
    width:SIZES.width-44,
    zIndex:999,
},
image:{
    aspectRatio:1,
    resizeMode:'cover',
},
details:{
    marginTop:-SIZES.large,
    backgroundColor:COLORS.lightWhite,
    width:SIZES.width,
    borderTopLeftRadius:SIZES.medium,
    borderTopRightRadius:SIZES.medium,

},
titleRow:{
    marginHorizontal:20,
    paddingBottom:SIZES.small,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    width:SIZES.width -24,
    top:20,
},
title:{
    fontFamily:"bold",
    fontSize:SIZES.large -5,
},
priceWrapper:{
    backgroundColor:COLORS.lightpurple,
    borderRadius:SIZES.large,
},
price:{
    fontFamily:"semibold",
    fontSize:SIZES.large -5,
    paddingHorizontal:10

},
ratingRow:{
    paddingBottom:SIZES.small,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    width:SIZES.width -10,
    top:5,
    
},
rating:{
    top:SIZES.large,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginHorizontal:SIZES.large
},
ratingText:{
    color:COLORS.gray,
    fontFamily:"medium",
    paddingHorizontal:10,
},
descriptionWrapper:{
    marginTop:SIZES.large*2,
    marginHorizontal:SIZES.large,
},
description:{
    fontFamily:'medium',
    fontSize:SIZES.large-3,
    textTransform:'uppercase'
},
descText:{
    fontFamily:'regular',
    fontSize:SIZES.small,
    textAlign:'justify',
    marginBottom:SIZES.small
},
location:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:COLORS.lightpurple,
    marginHorizontal:12,
    padding:5,
    borderRadius:SIZES.large
},
cartRow:{
    paddingBottom:SIZES.small,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:'center',
    width:SIZES.width ,

},
cartBtn:{
    width:SIZES.width*0.7,
    backgroundColor:COLORS.black,
    padding:SIZES.small/2,
    borderRadius:SIZES.large,
    marginLeft:12,
   // justifyContent:'center',
    alignItems:'center'
},
cartText:{
    fontFamily:"medium",
    fontSize:SIZES.large,
    color:COLORS.lightWhite
},
add2cart:{
width:35,
height:35,
borderRadius:50,
margin:SIZES.small,
backgroundColor:COLORS.black,
alignItems:'center',
justifyContent:'center'

}


})

export default styles;