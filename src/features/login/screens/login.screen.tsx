import React from "react";
import { ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import images from "../../../../assets/Images";
import CustomButton from "../../../components/button";
import CustomTextInput from "../../../components/CustomTextInput";
import { SafeArea } from "../../../components/safeArea";
import { Text } from "../../../components/typography";

function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeArea>
      <ScrollView>
        <LoginContainer>
          <ImageContainer source={images.login_image} resizeMode="contain" />
          <CustomScreenHeader>Hello There Welcome Back</CustomScreenHeader>
          <CaptionContainer>
            <Text variant="caption">Sign in to start your journey</Text>
          </CaptionContainer>
          <TextInputContainer>
            <Text variant="caption">Email</Text>

            <CustomTextInput
              placeholder="Email"
              value={email}
              onChangeText={(text: string) => setEmail(text)}
            />
          </TextInputContainer>
          <TextInputContainer>
            <Text variant="caption">Password</Text>
            <CustomTextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text: string) => setPassword(text)}
            />
          </TextInputContainer>
          <ForgetPasswordContainer>
            <Text variant="caption">Forget Password ?</Text>
          </ForgetPasswordContainer>
          <TextInputContainer>
            <CustomButton text="Sign in" onPress={() => console.log("hi")} />
          </TextInputContainer>
          <LinkContainer>
            <Text variant="caption">New user sign up</Text>
          </LinkContainer>
        </LoginContainer>
      </ScrollView>
    </SafeArea>
  );
}

const LoginContainer = styled.View`
  margin-top: 10%;
  height: 90%;
  padding: 0 ${(props) => props.theme.space[3]};
`;
const ImageContainer = styled.Image`
  width: 120px;
  height: 120px;
`;

const TextInputContainer = styled.View`
  margin: ${(props) => props.theme.space[1]} 0;
`;

const CustomScreenHeader = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h3};
`;

const CaptionContainer = styled.View`
  margin: ${(props) => props.theme.space[3]} 0
    ${(props) => props.theme.space[4]};
`;
const HeaderBold = styled.Text`
  color: ${(props) => props.theme.colors.brand.primary};
  font-size: ${(props) => props.theme.fontSizes.h3};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const LinkContainer = styled.View`
  margin: ${(props) => props.theme.space[4]} 0;
  justify-content: center;
  align-items: center;
`;

const ForgetPasswordContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  text-transform: uppercase;
  margin: ${(props) => props.theme.space[1]} 0;
`;

export default LoginScreen;
