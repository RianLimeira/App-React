import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Details from "../../screens/Details";
import Animation from "../../screens/Animation";

const Drawer = createDrawerNavigator();

export default function DrawerRouter(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen options={{
                headerTitle: 'Tela Inicial',
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'red',
                  },
            }} name="Inicio" component={Home} />
            {/* <Drawer.Screen options={{
                headerTitle: 'Detalhes Produtos',
                headerStyle: {
                    backgroundColor: 'red',              
                  },
            }} name="Detalhes" component={Details} /> */}

            <Drawer.Screen options={{
                headerTitle: 'Animações',
                headerStyle: {
                    backgroundColor: 'red',
                },
            }} name="Animations" component={Animation} />
        </Drawer.Navigator>
    )
}