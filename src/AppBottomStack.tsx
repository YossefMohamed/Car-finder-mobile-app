import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "./infrastructure/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./components/safeArea";
import { Text } from "react-native-paper";
import HomeScreen from "./features/home/screens/home.screen";
import CarsScreen from "./features/cars/screens/cars.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON: any = {
  Cars: "car",
  Settings: "settings",
  Home: "home",
  Favorites: "heart-circle-sharp",
};

const createScreenOptions = ({ route }: { route: { name: string } }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: any) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.tabs.primary,
    tabBarInactiveTintColor: colors.tabs.secondary,
    tabBarStyle: {
      backgroundColor: colors.brand.dark,
      borderTopWidth: 0,
    },
    tabBarItemStyle: {
      backgroundColor: colors.brand.dark,
      margin: 5,
    },
  };
};

const Settings = () => (
  <SafeArea>
    <Text>awd</Text>
  </SafeArea>
);

export const AppBottomStack = () => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    sceneContainerStyle={{
      backgroundColor: colors.tabs.secondary,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
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
);
