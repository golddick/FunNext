import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback  } from 'react';
import Buttomtabnavigation from "./navigation/Buttomtabnavigation";
import { ProductDetail, NewRivals } from "./screens";


const stack = createNativeStackNavigator();

export default function App() {
  const [fontdLoaded] = useFonts({
  regular: require('./assets/fonts/Poppins-Regular.ttf'),
  bold: require('./assets/fonts/Poppins-Bold.ttf'),
  light: require('./assets/fonts/Poppins-Light.ttf'),
  medium: require('./assets/fonts/Poppins-Medium.ttf'),
  semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf')
})

const onLayoutRootView = useCallback(async()=>{
  if (fontdLoaded){
    await SplashScreen.hideAsync();
  }
}, [fontdLoaded]);
if(!fontdLoaded){
  return null;
}
  return (
   <NavigationContainer>
    <stack.Navigator>
      <stack.Screen
      name="Bottom navigation"
      component={Buttomtabnavigation}
    options={{headerShown:false}}
      />

      <stack.Screen
      name="ProductDetail"
      component={ProductDetail}
    options={{headerShown:false}}
      />

       <stack.Screen
      name="ProductList"
      component={NewRivals}
    options={{headerShown:false}}
      />
    </stack.Navigator>
   </NavigationContainer>
  );
}


