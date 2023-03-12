import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/safeArea";
import { Text } from "react-native-paper";
import HomeScreen from "../../features/home/screens/home.screen";
import DrawerView from "../../components/DrawerView";
import CarNavigation from "./car.navigation";
import Favorite from "../../features/favorites/screens/favorite.screen";

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

    header({ navigation }) {
      return <DrawerView />;
    },
  };
};

export const AppBottomStack = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,

        tabBarLabel: ({ focused }) => {
          return focused ? (
            <Text
              style={{
                color: focused ? colors.tabs.primary : colors.tabs.secondary,
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ) : null;
        },
      }}
    />
    <Tab.Screen
      name="Cars"
      component={CarNavigation}
      options={{
        headerShown: false,

        tabBarLabel: ({ focused }) => {
          return focused ? (
            <Text
              style={{
                color: focused ? colors.tabs.primary : colors.tabs.secondary,
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ) : null;
        },
      }}
    />

    <Tab.Screen
      name="Favorites"
      component={Favorite}
      options={{
        tabBarLabel: ({ focused }) => {
          return focused ? (
            <Text
              style={{
                color: focused ? colors.tabs.primary : colors.tabs.secondary,
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ) : null;
        },
      }}
    />
  </Tab.Navigator>
);
