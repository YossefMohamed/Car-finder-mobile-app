import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../../components/drawerContent";
import { AppBottomStack } from "./AppBottomStack";
import CarNavigation from "./car.navigation";

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
      <DrawerStack.Screen name="Cars" component={CarNavigation} />
    </DrawerStack.Navigator>
  );
}