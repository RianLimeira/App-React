import { NavigationContainer } from "@react-navigation/native";

import DrawerRouter from "./src/routes/drawer";

import './src/config/firebase/index.js';

export default function App() {

  return (
    <NavigationContainer>
      {/* <StackRouter /> */}
      <DrawerRouter />
      {/* <TopTabsRouter /> */}
      {/* <BottomTabsRouter /> */}
    </NavigationContainer>
  );
}

