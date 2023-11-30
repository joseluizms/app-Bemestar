import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home/index";
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from "./src/screens/Login";
import { View, Text, TouchableOpacity} from "react-native-web";
import { createStackNavigator } from '@react-navigation/stack';





function Home1 ({navigation}){

return (
  <View>

    <Text>
      hi omomd
    </Text>
    {[1,2,3,4,5].map((item) => {
      return (
        <TouchableOpacity 
        key={item}
        onPress={()=> {
          navigation.navigate('Homecerta')
        }}
        >

          <Text>
            Podcast: 0{item}
          </Text>
        </TouchableOpacity>

      )
    })}
  </View>
)}

function Login2 (){

  return (
    <View>
  
      <Text>
        hi omomd
  
  
        5.515
      </Text>
    </View>
  )

}
//////////////////////////////////

const HomeStack = createStackNavigator();

function HomeTabStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home1" component={Home1} />
      <HomeStack.Screen name="Homecerta" component={Home} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTabStack" component={HomeTabStack} />
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
