import styled from "styled-components";

export const SwipperContainer = styled.View`
  height: 350px;
  position: relative;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CarDetailsTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  flex: 1;
`;

export const Details = styled.ScrollView`
  padding: ${(props) => props.theme.space[2]} 0 0
    ${(props) => props.theme.space[4]};
`;

export const UserContainer = styled.View`
  height: 50px;
  min-width: 120px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 100px;
  margin: 0 ${(props) => props.theme.space[4]};
  padding: 0 ${(props) => props.theme.space[3]};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const RatingContainer = styled.View`
  margin: 0 ${(props) => props.theme.space[1]};
`;

export const TagContainer = styled.View`
  flex-direction: row;
  margin: ${(props) => props.theme.space[4]} 0;
`;

export const Description = styled.View`
  padding: 0 ${(props) => props.theme.space[4]} 0 0;
`;

export const DescriptionBody = styled.View``;

export const ButtonContainer = styled.View`
  height: 10%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: ${(props) => props.theme.colors.brand.primary} 5px solid;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 0 ${(props) => props.theme.space[5]};
`;
export const PriceCotnainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const LovedContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  right: ${(props) => props.theme.space[2]};
`;

export const Overall = styled.View`
  margin: 0 0 ${(props) => props.theme.space[4]} 0;
`;
