import React from "react";
import styled from "styled-components";

const CustomButton = ({ text }: { text: string }) => {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[0]};
  border-radius: 10px;
  min-width: 60px;
  max-height: 40px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text.inverse};
  font-size: ${(props) => props.theme.fontSizes.button};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
`;
export default CustomButton;
