import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View } from "react-native";
import styled from "styled-components/native";
import CarsScreen from "./src/features/restaurants/screens/cars.screen";

export default function App() {
  return (
    <>
      <CarsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;
