import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"; 
import Home from "../../screens/Home";
import Details from "../../screens/Details";

const TopTabs = createMaterialTopTabNavigator();

export default function TopTabsRouter(){
    return(
        <TopTabs.Navigator className='top-8'>
            <TopTabs.Screen options={{
                headerTitle: 'Tela Inicial',
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'red',
                    
                    
                  },
            }} name="Home" component={Home} />
            <TopTabs.Screen options={{
                headerTitle: 'Detalhes Produtos'
            }} name="Details" component={Details} />
        </TopTabs.Navigator>
    )
}