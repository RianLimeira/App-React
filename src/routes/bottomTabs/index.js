import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Home from "../../screens/Home";
import Details from "../../screens/Details";

const BottomTabs = createBottomTabNavigator();

export default function BottomTabsRouter(){
    return(
        <BottomTabs.Navigator>
            <BottomTabs.Screen options={{
                headerTitle: 'Tela Inicial',
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'red',              
                  },
            }} name="Home" component={Home} />
            <BottomTabs.Screen options={{
                headerTitle: 'Detalhes Produtos'
            }} name="Details" component={Details} />
        </BottomTabs.Navigator>
    )
}