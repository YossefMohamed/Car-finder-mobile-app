import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import images from "../../../../assets/Images";
import CustomButton from "../../../components/button";
import CustomTextInput from "../../../components/CustomTextInput";
import { SafeArea } from "../../../components/safeArea";
import { Text } from "../../../components/typography";
import { Formik } from "formik";
import { loginValidationSchema } from "../components/loginValidationSchema";
import Users from "../../../api/UsersEndpoint";
import { useMutation } from "react-query";
import { useAuthStore } from "../../../zustand/stores";

function LoginScreen() {
  const navigate = useNavigation();
  const { isAuthenticated, login, refreshToken } = useAuthStore();
  useEffect(() => {
    console.log("refreshToken");
    console.log(refreshToken);
    console.log("refreshToken");
    console.log(refreshToken);
    console.log("refreshToken");
    isAuthenticated && navigate.navigate("Home");
  }, [isAuthenticated]);
  const {
    isLoading,
    mutate,
    error: loginError,
  }: { isLoading: boolean; mutate: any; error: any } = useMutation(
    (data: any) => {
      return Users.userLogin(data);
    },
    {
      onSuccess: (data) => {
        login(data.token, data.refreshToken);
      },
    }
  );

  return (
    <SafeArea>
      <ScrollView>
        <LoginContainer>
          <ImageContainer source={images.login_image} resizeMode="contain" />
          <CustomScreenHeader>Hello There Welcome Back</CustomScreenHeader>
          <CaptionContainer>
            <Text variant="caption">Sign in to start your journey</Text>
          </CaptionContainer>

          {isLoading ? (
            <Text variant="caption">"Checking your credentials.." </Text>
          ) : (
            ""
          )}

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => mutate(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInputContainer>
                  <Text variant="caption">Email</Text>

                  <CustomTextInput
                    name="email"
                    placeholder="Email Address"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    error={!!errors.email}
                    keyboardType="email-address"
                  />
                </TextInputContainer>
                {errors.email && <Text variant="error">{errors.email}</Text>}
                <TextInputContainer>
                  <Text variant="caption">Password</Text>
                  <CustomTextInput
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    error={!!errors.email}
                  />
                </TextInputContainer>
                {errors.password && (
                  <Text variant="error">{errors.password}</Text>
                )}
                <ForgetPasswordContainer>
                  <Text variant="caption">Forget Password ?</Text>
                </ForgetPasswordContainer>
                <TextInputContainer>
                  <CustomButton text="Sign in" onPress={handleSubmit} />
                </TextInputContainer>
              </>
            )}
          </Formik>
          <Center>
            <Text variant="label">OR</Text>
          </Center>
          <LinkContainer>
            <CustomButton
              text="sign up"
              link={true}
              onPress={() => navigate.navigate("RegisterScreen")}
            />
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
const Center = styled.View`
  justify-content: center;
  align-items: center;
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
  margin: ${(props) => props.theme.space[3]} 0;
`;

const ForgetPasswordContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  text-transform: uppercase;
  margin: ${(props) => props.theme.space[1]} 0;
`;

export default LoginScreen;
