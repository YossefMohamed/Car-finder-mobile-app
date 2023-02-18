import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";
import CarsScreen from "./src/features/cars/screens/cars.screen";

import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "./src/infrastructure/theme/colors";
import { SafeArea } from "./src/components/safeArea";

const Tab = createBottomTabNavigator();

const TAB_ICON: any = {
  Cars: "md-car",
  Settings: "settings",
  Favorites: "heart-circle-sharp",
};
const createScreenOptions = ({ route }: { route: { name: string } }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: any) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Settings = () => (
  <SafeArea>
    <Text>awd</Text>
  </SafeArea>
);

export default function App() {
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  if (!oswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: colors.brand.primary,
              inactiveTintColor: colors.brand.muted,
            }}
          >
            <Tab.Screen
              name="Cars"
              component={CarsScreen}
              options={{ headerShown: false }}
            />

            <Tab.Screen
              name="Favorites"
              component={CarsScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
