import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ScrollView, TextInput } from "react-native";
import styled from "styled-components";
import images from "../../../../assets/Images";
import CustomButton from "../../../components/button";
import CustomTextInput from "../../../components/CustomTextInput";
import { SafeArea } from "../../../components/safeArea";
import { Spacer } from "../../../components/spacer";
import { Text } from "../../../components/typography";
import { Formik } from "formik";
import { registerValidationSchema } from "../components/registerValidationSchema";
import { useMutation } from "react-query";
import Users from "../../../api/UsersEndpoint";

function RegisterScreen() {
  const navigation = useNavigation();

  const {
    isLoading,
    mutate,
    error: registerError,
  }: { isLoading: boolean; mutate: any; error: any } = useMutation(
    (data: any) => {
      return Users.userRegister(data);
    },
    {
      onSuccess: () => navigation.navigate("LoginScreen"),
    }
  );

  return (
    <SafeArea>
      <ScrollView>
        <LoginContainer>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              email: "",
              password: "",
              lastName: "",
              firstName: "",
              passwordConfirmation: "",
            }}
            onSubmit={(values) => {
              mutate(values);
            }}
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
                <ImageContainer
                  source={images.login_image}
                  resizeMode="contain"
                />
                <CustomScreenHeader>Hello There Welcome </CustomScreenHeader>
                <CaptionContainer>
                  <Text variant="caption">Sign up to start your journey</Text>
                </CaptionContainer>
                <ErrorContainer>
                  {registerError &&
                    registerError.error.map(
                      ({ message, idx }: { message: string; idx: number }) => (
                        <Text variant="error" key={idx}>
                          {message}
                        </Text>
                      )
                    )}
                </ErrorContainer>

                <TextInputContainer>
                  <Text variant="caption">First name</Text>
                  <CustomTextInput
                    name="firstName"
                    placeholder="Your first name"
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                    error={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <Text variant="error">{errors.firstName}</Text>
                  )}
                </TextInputContainer>
                <TextInputContainer>
                  <Text variant="caption">Last name</Text>
                  <CustomTextInput
                    name="lastName"
                    placeholder="Your last name"
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                    error={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <Text variant="error">{errors.lastName}</Text>
                  )}
                </TextInputContainer>
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
                  {errors.email && <Text variant="error">{errors.email}</Text>}
                </TextInputContainer>
                <TextInputContainer>
                  <Text variant="caption">Password</Text>
                  <CustomTextInput
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                    error={!!errors.password}
                  />
                  {errors.password && (
                    <Text variant="error">{errors.password}</Text>
                  )}
                </TextInputContainer>

                <TextInputContainer>
                  <Text variant="caption">Confirm password</Text>
                  <CustomTextInput
                    placeholder="Password confirm"
                    onChangeText={handleChange("passwordConfirmation")}
                    onBlur={handleBlur("passwordConfirmation")}
                    value={values.passwordConfirmation}
                    secureTextEntry
                    error={!!errors.passwordConfirmation}
                  />
                  {errors.passwordConfirmation && (
                    <Text variant="error">{errors.passwordConfirmation}</Text>
                  )}
                </TextInputContainer>
                <LinkContainer>
                  <CustomButton text="Sign up" onPress={handleSubmit} />
                </LinkContainer>
                <Center>
                  <Text variant="label">OR</Text>
                </Center>
                <LinkContainer>
                  <CustomButton
                    text="sign in"
                    link={true}
                    onPress={() => navigation.navigate("LoginScreen")}
                  />
                </LinkContainer>
              </>
            )}
          </Formik>
        </LoginContainer>
      </ScrollView>
    </SafeArea>
  );
}

const LoginContainer = styled.View`
  margin-top: 8%;
  height: 90%;
  padding: 0 ${(props) => props.theme.space[3]};
`;
const ImageContainer = styled.Image`
  width: 120px;
  height: 120px;
`;

const TextInputContainer = styled.View`
  margin: ${(props) => props.theme.space[0]} 0;
`;

const CustomScreenHeader = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h3};
`;

const CaptionContainer = styled.View`
  margin: ${(props) => props.theme.space[3]} 0
    ${(props) => props.theme.space[2]};
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

const Center = styled.View`
  justify-content: center;
  align-items: center;
`;

const ErrorContainer = styled.View`
  padding: 0 0 ${(props) => props.theme.space[2]} 0;
`;

export default RegisterScreen;
