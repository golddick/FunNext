import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'


const styles = StyleSheet.create({
    NewContainer:{
        marginHorizontal:SIZES.medium,
        marginTop:SIZES.medium
    },
    Header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    HeaderText:{
        fontFamily:'semibold',
        fontSize:SIZES.xLarge -5 
    }
})

export default styles