import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Add from "../../screens/Add";
import Animation from "../../screens/Animation";
import Login from "../../screens/Login";
import Search from "../../screens/Search";
import Pokedex from "../../screens/Search/Pokedex";


const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => (
  <DrawerStack.Navigator initialRouteName="Home">
    <DrawerStack.Screen
      options={{
        headerTitle: "Tela Inicial",
        headerShown: true,
        headerStyle: {
          backgroundColor: "red",
        },
      }}
      name="Home"
      component={Home}
    />

    <DrawerStack.Screen
      options={{
        headerTitle: "Buscas",
        headerShown: true,
        headerStyle: {
          backgroundColor: "orange",
        },
      }}
      name="Search"
      component={Search}
    />

    <DrawerStack.Screen
      options={{
        headerTitle: "Pokedex",
        headerShown: true,
        headerStyle: {
          backgroundColor: "orange",
        },
      }}
      name="Pokedex"
      component={Pokedex}
    />

    <DrawerStack.Screen
      options={{
        headerTitle: "Animações",
        headerStyle: {
          backgroundColor: "red",
        },
      }}
      name="Animations"
      component={Animation}
    />
  </DrawerStack.Navigator>
);

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Login">
    <MainStack.Screen
      options={{
        headerShown: false,
      }}
      name="Login"
      component={Login}
    />

    <MainStack.Screen
      options={{
        headerTitle: "Adicionar",
        headerStyle: {
          backgroundColor: "red",
        },
      }}
      name="Add"
      component={Add}
    />
  </MainStack.Navigator>
);

const RootStack = createStackNavigator();
const RootNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="Drawer"
      component={DrawerStackScreen}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
