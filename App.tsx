import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";
import CarsScreen from "./src/features/restaurants/screens/cars.screen";

import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
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
    <ThemeProvider theme={theme}>
      <CarsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
