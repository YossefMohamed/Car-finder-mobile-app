import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../../components/drawerContent";
import SellCar from "../../features/sellCar/screens/sellCar.screen";
import { AppBottomStack } from "./AppBottomStack";
import CarNavigation from "./car.navigation";
import FilterDrawerContent from "./FilterDrawer";

const DrawerStack = createDrawerNavigator();
const FilterDrawerNavigation = createDrawerNavigator();

function FilterDrawer() {
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        header({ navigation }) {
          return;
        },
      }}
    >
      <DrawerStack.Screen name="Home" component={AppBottomStack} />
      <DrawerStack.Screen name="SellCarScreen" component={SellCar} />
      <DrawerStack.Screen name="Cars" component={CarNavigation} />
    </DrawerStack.Navigator>
  );
}

export function AppDrawerStack() {
  return (
    // <DrawerStack.Navigator
    //   screenOptions={{
    //     header({ navigation }) {
    //       return <DrawerView navigation={navigation} />;
    //     },
    //   }}
    // >

    <FilterDrawerNavigation.Navigator
      id="filterDrawer"
      screenOptions={{
        drawerPosition: "right",
        header(props) {
          return;
        },
        swipeEnabled: false,
      }}
      drawerContent={() => <FilterDrawerContent />}
    >
      <DrawerStack.Screen name="AppContent" component={FilterDrawer} />
    </FilterDrawerNavigation.Navigator>
  );
}
