import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppBottomStack } from "./AppBottomStack";
import { DrawerContent } from "./components/drawerContent";
import DrawerView from "./DrawerView";

const DrawerStack = createDrawerNavigator();

export function AppDrawerStack() {
  return (
    // <DrawerStack.Navigator
    //   screenOptions={{
    //     header({ navigation }) {
    //       return <DrawerView navigation={navigation} />;
    //     },
    //   }}
    // >
    <DrawerStack.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        header({ navigation }) {
          return;
        },
      }}
    >
      <DrawerStack.Screen name="Home" component={AppBottomStack} />
      <DrawerStack.Screen name="AppBottomStack" component={AppBottomStack} />
    </DrawerStack.Navigator>
  );
}
