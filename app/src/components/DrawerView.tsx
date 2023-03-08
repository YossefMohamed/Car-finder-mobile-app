import { View, Text } from "react-native";
import { SafeArea } from "./safeArea";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../infrastructure/theme/colors";
import styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DrawerView() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <HeaderContainer>
        <Ionicons
          name={"ios-menu-sharp"}
          size={27}
          color={colors.brand.dark}
          onPress={() => navigation.openDrawer()}
        />
        <IconContainer onPress={() => navigation.navigate("ProfileScreen")}>
          <Ionicons name={"person"} size={20} color={colors.brand.primary} />
        </IconContainer>
      </HeaderContainer>
    </SafeAreaView>
  );
}

const HeaderContainer = styled.View`
  background-color: transparent;
  min-height: 45px;
  margin-top: ${StatusBar.currentHeight}px;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]}
    ${(props) => props.theme.space[0]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.tabs.primary};
  padding: 10px;
  border-radius: 1000px;
`;
