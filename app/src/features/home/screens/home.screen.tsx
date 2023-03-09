import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components";
import images from "../../../../assets/Images";
import CustomButton from "../../../components/button";
import { SafeArea } from "../../../components/safeArea";
import HeaderHome from "../components/HeaderHome";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeArea>
      <HomeContainer>
        <HeaderHome />
        <TitleContainer>
          <Title>Bated Car</Title>
          <TitleSecondary>Rent your car to earn money</TitleSecondary>
          <CustomButton
            text="Start Now"
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          />
        </TitleContainer>
        <BackgroundImage source={images.main_bg} />
      </HomeContainer>
    </SafeArea>
  );
}

const HomeContainer = styled(View)`
  flex: 1;
  position: relative;
`;
const BackgroundImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
`;

const TitleContainer = styled(View)`
  z-index: 1;
  position: absolute;
  top: ${(props) => props.theme.space[5]};
  left: 20px;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.body};
`;

const TitleSecondary = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  margin: ${(props) => props.theme.space[3]} 0
    ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.title};

  font-family: ${(props) => props.theme.fonts.heading};
`;

export default HomeScreen;
