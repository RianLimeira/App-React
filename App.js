import { NavigationContainer } from "@react-navigation/native";

import DrawerRouter from "./src/routes/drawer";

import './src/config/Firebase';

export default function App() {

  return (
    <NavigationContainer>     
      <DrawerRouter />
    </NavigationContainer>
  );
}

