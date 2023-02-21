import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { colors } from "../infrastructure/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const CarouselCardItem = ({ item, index }: any) => {
  return (
    <Container>
      <Ionicons name={"timer"} size={35} color={colors.text.inverse} />
      <Title>3.6s</Title>
      <SecondaryTitle>0-100 Km/h</SecondaryTitle>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 8px;
  padding: ${(props) => props.theme.space[3]};
  justify-content: space-between;
  width: ${ITEM_WIDTH}px;
`;

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  margin: ${(props) => props.theme.space[2]} 0;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.brand.primary};
`;

const SecondaryTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export default CarouselCardItem;
