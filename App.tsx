import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./src/infrastructure/theme/colors";
import Navigation from "./src/infrastructure/navigation";
import RegisterScreen from "./src/features/resgister/screens/register.screen";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/features/login/screens/login.screen";
import LoginHeader from "./src/components/headerLogin";

const MainStack = createStackNavigator();

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
          <MainStack.Navigator
            screenOptions={{
              header({ navigation }) {
                return <LoginHeader />;
              },
            }}
          >
            <MainStack.Screen
              name="Index"
              component={Navigation}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />

            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.brand.dark};
`;
