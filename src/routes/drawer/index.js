import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/Home";
import Details from "../../screens/Details";

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
            }} name="Home" component={Home} />
            <Drawer.Screen options={{
                headerTitle: 'Detalhes Produtos'
            }} name="Details" component={Details} />
        </Drawer.Navigator>
    )
}