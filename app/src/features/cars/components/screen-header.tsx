import React from "react";
import styled from "styled-components";

function ScreenHeader() {
  return (
    <CustomScreenHeader>
      Let's find a <HeaderBold>great</HeaderBold> {"\n"}
      <HeaderBold>car</HeaderBold> for you
    </CustomScreenHeader>
  );
}

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

export default ScreenHeader;
