import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

// export const Section = styled(View)`
//   flex-direction: row;
//   padding: ${(props) => props.theme.space[2]} 0;
//   justify-content: space-between;
// `;

// export const Row = styled(View)`
//   flex-direction: row;
// `;

// export const ReviewCounter = styled(View)`
//   display: flex;
//   flex-direction: row;
// `;
export const CardContainer = styled(TouchableOpacity)`
  border-radius: 0;
  margin-bottom: 15px;
  min-height: 200px;
  width: 90%;
  margin: ${(props) => props.theme.space[3]} auto;
  position: relative;
  elevation: 2;
  border-radius: 20px;

  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardImage = styled.Image`
  margin: ${(props) => props.theme.space[1]} 0;
  height: 100%;
  width: 45%;
  top: -${(props) => props.theme.space[3]};
  left: -${(props) => props.theme.space[3]};
  position: absolute;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 0px;
  overflow: hidden;
  object-position: contain;
  border-radius: 20px;
`;

export const CardContent = styled.View`
  position: absolute;
  top: 5%;
  right: 10%;
  width: 45%;
  height: 90%;
`;

export const CardTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
export const CardSecondaryTitle = styled.Text``;

export const CardRating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  align-items: center;
  flex: 1;
`;
export const CardDetails = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
// export const Rating = styled(View)`
// flex-direction: row;
// padding-top: ${(props) => props.theme.space[1]};
// padding-bottom: ${(props) => props.theme.space[1]};
// align-items: center;
// `;

// export const Description = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.body};
//   font-size: ${(props) => props.theme.fontSizes.caption};
// `;

// export const Info = styled(View)`
//   padding: ${(props) => props.theme.space[3]} 0;
// `;
