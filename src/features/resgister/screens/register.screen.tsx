import React from "react";
import { ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import images from "../../../../assets/Images";
import CustomButton from "../../../components/button";
import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/typography";

function RegisterScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeArea>
      <ScrollView>
        <LoginContainer>
          <ImageContainer source={images.login_image} resizeMode="contain" />
          <CustomScreenHeader>Hello There Welcome 😁</CustomScreenHeader>
          <CaptionContainer>
            <Text variant="caption">Sign up to start your journey</Text>
          </CaptionContainer>
          <TextInputContainer>
            <Text variant="caption">Name</Text>
            <CustomTextInput placeholder="Name" value={password} />
          </TextInputContainer>

          <TextInputContainer>
            <Text variant="caption">Email</Text>

            <CustomTextInput placeholder="Email" value={email} />
          </TextInputContainer>
          <TextInputContainer>
            <Text variant="caption">Password</Text>
            <CustomTextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
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

const CustomTextInput = styled(TextInput)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 5px;
  border: ${(props) => props.theme.colors.brand.primary} solid 1px;
  margin: ${(props) => props.theme.space[1]} 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

const ForgetPasswordContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  text-transform: uppercase;
  margin: ${(props) => props.theme.space[1]} 0;
`;

export default RegisterScreen;
