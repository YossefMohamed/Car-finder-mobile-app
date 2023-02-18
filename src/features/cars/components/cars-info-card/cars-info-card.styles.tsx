import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const Section = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
  justify-content: space-between;
`;

export const Row = styled(View)`
  flex-direction: row;
`;

export const ReviewCounter = styled(View)`
  display: flex;
  flex-direction: row;
`;
export const CardContainer = styled(Card)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 0;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[1]} 0;

  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 0px;
  overflow: hidden;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  align-items: center;
`;

export const Description = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]} 0;
`;
