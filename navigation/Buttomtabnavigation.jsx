import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import { Home, Search, Profile } from '../screens'
import {Ionicons} from '@expo/vector-icons'
import {COLORS} from '../constants/index'


const Buttomtabnavigation = () => {
    const Tab = createBottomTabNavigator();
    
    const screenOption ={
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShow:false,
        tabBarStyle:{
            position:'absolute',
            bottom:0,
            right:0,
            left:0,
            elevation:0,
            height:70,

        }
    }
  return (
    <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name='Home' component={Home}
        options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
                /> 
            },
            headerShown: false,
        }}/>
        <Tab.Screen name='Search' component={Search}
        options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={'search-sharp'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
                /> 
            },
            headerShown: false,
        }}/>
        <Tab.Screen name='Profile' component={Profile}
        options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? 'person' :'person-sharp'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
                /> 
            },
            headerShown: false,
        }}/>
       
    </Tab.Navigator>
  )
}

export default Buttomtabnavigation