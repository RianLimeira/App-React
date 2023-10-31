import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Details from "../../screens/Details";
import Animation from "../../screens/Animation";
import Login from "../../screens/Login";

const Drawer = createDrawerNavigator();

export default function DrawerRouter(){
    return(
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen options={{
                headerTitle: 'Login',
                headerShown:false,
                headerStyle: {
                    backgroundColor: 'red',
                },
            }} name="Login" component={Login} />

            <Drawer.Screen options={{
                headerTitle: 'Tela Inicial',
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'red',
                  },
            }} name="Inicio" component={Home} />

            <Drawer.Screen options={{
                headerTitle: 'Adicionar',
                headerStyle: {
                    backgroundColor: 'red',              
                  },
            }} name="Detalhes" component={Details} />

            <Drawer.Screen options={{
                headerTitle: 'Animações',
                headerStyle: {
                    backgroundColor: 'red',
                },
            }} name="Animations" component={Animation} />
            
        </Drawer.Navigator>
    )
}