import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";
import Details from "../../screens/Details";

const Stack = createNativeStackNavigator();

export default function StackRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen options={{
                headerTitle: 'Tela Inicial',
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'red',
                  },
            }} name="Home" component={Home} />
            <Stack.Screen options={{
                headerTitle: 'Detalhes Produtos'
            }} name="Details" component={Details} />
        </Stack.Navigator>
    )
}