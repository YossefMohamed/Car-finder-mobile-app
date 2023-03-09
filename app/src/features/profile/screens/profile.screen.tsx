import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Switch } from "react-native-paper";
import styled from "styled-components";
import images from "../../../../assets/Images";
import CustomButton from "../../../components/button";
import { SafeArea } from "../../../components/safeArea";
import { Text } from "../../../components/typography";
import { colors } from "../../../infrastructure/theme/colors";

function ProfileScreen() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeArea>
      <ScrollView>
        <ProfilePictureContainer>
          <Avatar.Image size={100} source={images.login_image} />
          <TouchableOpacity>
            <ChangePictureLink>Change Profile Picture</ChangePictureLink>
          </TouchableOpacity>
        </ProfilePictureContainer>
        <HeadingContainer>
          <Text variant="title">Information</Text>
        </HeadingContainer>
        <InfoItem>
          <IconContainer>
            <Ionicons name="card" color={colors.brand.dark} size={20} />
          </IconContainer>

          <Text variant="body">Yossef Mohamed</Text>
        </InfoItem>
        <InfoItem>
          <IconContainer>
            <Ionicons name="person" color={colors.brand.dark} size={20} />
          </IconContainer>

          <Text variant="body">yossef29</Text>
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <Ionicons name="location" color={colors.brand.dark} size={20} />
          </IconContainer>

          <Text variant="body">Egypt</Text>
        </InfoItem>
        <HeadingContainer>
          <Text variant="title">Content</Text>
        </HeadingContainer>
        <InfoItem>
          <IconContainer>
            <Ionicons name="heart" color={colors.brand.dark} size={20} />
          </IconContainer>

          <Text variant="body">Favorites</Text>
        </InfoItem>
        <InfoItem style={{ justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <IconContainer>
              <Ionicons name="moon" color={colors.brand.dark} size={20} />
            </IconContainer>

            <Text variant="body">Dark mode</Text>
          </View>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={colors.brand.primary}
          />
        </InfoItem>

        <InfoItem>
          <IconContainer>
            <Ionicons name="log-out" color={colors.brand.dark} size={20} />
          </IconContainer>

          <Text variant="body">Logout</Text>
        </InfoItem>

        <ButtonContainer>
          <CustomButton text="Edit profile" onPress={console.log} />
        </ButtonContainer>
      </ScrollView>
    </SafeArea>
  );
}

const ProfileScreenContainer = styled.ScrollView`
  flex: 1;
`;

const ProfilePictureContainer = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.View`
  margin: ${(props) => props.theme.space[4]};
`;

const InfoItem = styled.View`
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
`;

const IconContainer = styled.View`
  margin: 0 ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[1]};
`;
const ChangePictureLink = styled.Text`
  color: ${(props) => props.theme.colors.text.link};
  margin: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
`;

const HeadingContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[4]};
`;
export default ProfileScreen;
