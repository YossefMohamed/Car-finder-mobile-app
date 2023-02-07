import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View } from "react-native";
import styled from "styled-components/native";
import CarsScreen from "./src/features/restaurants/screens/cars.screen";

export default function App() {
  return (
    <>
      <Clippy></Clippy>
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
const Clippy = styled.View`
  height: 300px;
  position: absolute;
  background: #434abf;
  width: 100%;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%);
`;
