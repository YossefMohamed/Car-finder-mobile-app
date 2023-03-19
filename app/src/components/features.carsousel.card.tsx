import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { colors } from "../infrastructure/theme/colors";
import styled from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6);

const CarouselCardItem = ({ item, index }: any) => {
  return (
    <Container>
      <FontAwesome5
        name={item.iconName}
        size={35}
        color={colors.text.primary}
      />
      <Title>{item.title}</Title>
      <SecondaryTitle>{item.description}</SecondaryTitle>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 8px;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
  justify-content: space-between;
  width: ${ITEM_WIDTH}px;
`;

const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  margin: ${(props) => props.theme.space[2]} 0;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.brand.primary};
  text-transform: uppercase;
`;

const SecondaryTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export default CarouselCardItem;
