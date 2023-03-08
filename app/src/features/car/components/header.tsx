import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { SafeAreaView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../infrastructure/theme/colors";

function CarScreenHeader() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <HeaderContainer>
        <IconContainer>
          <Ionicons
            name={"arrow-back"}
            size={27}
            color={colors.brand.dark}
            onPress={() => navigation.openDrawer()}
          />
        </IconContainer>

        <Row>
          <IconContainer>
            <Ionicons
              name={"resize"}
              size={20}
              color={colors.brand.dark}
              onPress={() => navigation.openDrawer()}
            />
          </IconContainer>
          <IconContainer>
            <Ionicons name={"heart"} size={20} color={colors.brand.primary} />
          </IconContainer>
        </Row>
      </HeaderContainer>
    </SafeAreaView>
  );
}

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const HeaderContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: transparent;
  min-height: 45px;
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
  margin: 0 ${(props) => props.theme.space[1]};
`;

export default CarScreenHeader;
