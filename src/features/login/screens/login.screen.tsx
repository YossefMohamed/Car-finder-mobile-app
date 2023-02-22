import React from "react";
import styled from "styled-components";
import images from "../../../../assets/Images";
import { SafeArea } from "../../../components/safeArea";
import { Text } from "../../../components/typography";

function LoginScreen() {
  return (
    <SafeArea>
      <LoginContainer>
        <ImageContainer source={images.login_image} resizeMode="contain" />
        <CustomScreenHeader>
          Let's find a <HeaderBold>great</HeaderBold> {"\n"}
          <HeaderBold>car</HeaderBold> for you
        </CustomScreenHeader>
      </LoginContainer>
    </SafeArea>
  );
}

const LoginContainer = styled.View`
  flex: 1;
`;
const ImageContainer = styled.Image`
  width: 100px;
  height: 100px;
`;

const CustomScreenHeader = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};

  font-size: ${(props) => props.theme.fontSizes.h4};
`;

const HeaderBold = styled.Text`
  color: ${(props) => props.theme.colors.brand.primary};
  font-size: ${(props) => props.theme.fontSizes.h3};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export default LoginScreen;
