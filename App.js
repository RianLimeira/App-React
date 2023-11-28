import { NavigationContainer } from "@react-navigation/native";

import DrawerRouter from "./src/routes/drawer";

import "./src/config/Firebase";
import Provider from "../app_pokemon/context/Provider";

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <DrawerRouter />
      </NavigationContainer>
    </Provider>
  );
}
