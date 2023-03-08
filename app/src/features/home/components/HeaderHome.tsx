import React from "react";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

function HeaderHome() {
  const navigation = useNavigation();
  return (
    <HeaderContainer>
      <Ionicons
        name={"ios-menu-sharp"}
        size={27}
        color={colors.brand.dark}
        onPress={() => navigation.openDrawer()}
      />
      <IconContainer>
        <Ionicons
          name={"person"}
          size={20}
          color={colors.brand.primary}
          onPress={() => navigation.navigate("ProfileScreen")}
        />
      </IconContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  background-color: transparent;
  min-height: 45px;
  z-index: 4;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.tabs.primary};
  padding: 10px;
  border-radius: 1000px;
`;

export default HeaderHome;
