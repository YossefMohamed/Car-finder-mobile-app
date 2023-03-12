import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";
import { Animated, Easing, View, StyleSheet } from "react-native";
const LoadingSpinner = () => {
  const spinValue = new Animated.Value(0);

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => spin());
  };
  useEffect(() => {
    spin();
  }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <AntDesign name="loading1" color={colors.brand.primary} size={35} />
      </Animated.View>
    </View>
  );
};

const SpinnerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LoadingSpinner;
