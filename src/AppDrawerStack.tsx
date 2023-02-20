import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppBottomStack } from "./AppBottomStack";
import DrawerView from "./DrawerView";

const DrawerStack = createDrawerNavigator();

export function AppDrawerStack() {
  return (
    <DrawerStack.Navigator drawerContent={(props) => <DrawerView />}>
      <DrawerStack.Screen name="AppBottomStack" component={AppBottomStack} />
    </DrawerStack.Navigator>
  );
}
