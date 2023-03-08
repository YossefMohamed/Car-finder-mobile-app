import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DrawerView from "../../components/DrawerView";
import CarScreen from "../../features/car/screens/car.screen";
import CarsScreen from "../../features/cars/screens/cars.screen";
import LoginScreen from "../../features/login/screens/login.screen";
import RegisterScreen from "../../features/resgister/screens/register.screen";

function CarNavigation() {
  const CarStack = createStackNavigator();

  return (
    <CarStack.Navigator
      screenOptions={{
        header({ navigation }) {
          return <DrawerView />;
        },
      }}
    >
      <CarStack.Screen name="Cars" component={CarsScreen} />

      <CarStack.Screen
        name="CarScreen"
        component={CarScreen}
        options={{ headerShown: false }}
      />
    </CarStack.Navigator>
  );
}

export default CarNavigation;
