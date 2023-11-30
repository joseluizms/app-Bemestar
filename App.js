import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home/index";
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from "./src/screens/Login";
import { View, Text } from "react-native-web";



const Tab = createBottomTabNavigator();

function Home1 (){

return (
  <View>

    <Text>
      hi omomd


      5.515
    </Text>
  </View>

)

}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home1} />
      <Tab.Screen name="Settings" component={Login} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    
      <NavigationContainer>
        < MyTabs/>
      </NavigationContainer>
  );
}
