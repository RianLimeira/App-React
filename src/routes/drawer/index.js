import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../../screens/Home";
import Details from "../../screens/Details";
import Animation from "../../screens/Animation";
import Login from "../../screens/Login";

const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => (
    <DrawerStack.Navigator initialRouteName="Inicio">
        <DrawerStack.Screen options={{
            headerTitle: 'Tela Inicial',
            headerShown: true,
            headerStyle: {
                backgroundColor: 'red',
            },
        }} name="Inicio" component={Home} />

        <DrawerStack.Screen options={{
            headerTitle: 'Animações',
            headerStyle: {
                backgroundColor: 'red',
            },
        }} name="Animations" component={Animation} />
    </DrawerStack.Navigator>
);

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen options={{
            headerShown:false,
        }} name="Login" component={Login} />

        <MainStack.Screen options={{
            headerTitle: 'Adicionar',
            headerStyle: {
                backgroundColor: 'red',              
            },
        }} name="Detalhes" component={Details} />
    </MainStack.Navigator>
);

const RootStack = createStackNavigator();
const RootNavigator = () => (
    <RootStack.Navigator>
        <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Drawer" component={DrawerStackScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
);

export default RootNavigator;