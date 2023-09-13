import { NavigationContainer } from "@react-navigation/native";
import StackRouter from "./src/routes/stack";
import DrawerRouter from "./src/routes/drawer";
import TopTabsRouter from "./src/routes/topTabs";
import BottomTabsRouter from "./src/routes/bottomTabs";

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

