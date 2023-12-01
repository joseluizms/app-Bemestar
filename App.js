import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home/index";
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from "./src/screens/Login";
import { View, Text, TouchableOpacity} from "react-native-web";
import { createStackNavigator } from '@react-navigation/stack';
import { Perfil } from './src/screens/Perfil'
import { Tarefas } from './src/screens/Tarefas'



function Perfil1 ({navigation}){

return (
  <View>
    

    
    {[1].map((item) => {
      return (
        <TouchableOpacity 
        key={item}
        onPress={()=> {
          navigation.navigate('Perfil')
        }}
        >

          <Text>
            Com
          </Text>
        </TouchableOpacity>

      )
    })}
  </View>
)}




//////////////////////////////////////////////////



const HomeStack = createStackNavigator();

function HomeTabStack() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <HomeStack.Screen  name="Per" component={Perfil} />
    </HomeStack.Navigator>
  );
}

//////////////////
export function TarefasTabStack() {
  return (
    <HomeStack.Navigator  screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Tarefas" component={Tarefas} />
    </HomeStack.Navigator>
  );
}

/////////////////////////////////////////////////////////////////////////////

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen  name="Perfil" component={HomeTabStack} />
      <Tab.Screen name="Tarefas" component={TarefasTabStack} />
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
