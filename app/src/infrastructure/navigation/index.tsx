import React from "react";
import { AppDrawerStack } from "./AppDrawerStack";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Navigation() {
  return <AppDrawerStack />;
}

export default Navigation;
