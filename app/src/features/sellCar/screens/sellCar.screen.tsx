import React from "react";
import { SafeArea } from "../../../components/safeArea";
import SellCarHeader from "../components/sellCar.header";
import styled from "styled-components";
import { Text } from "../../../components/typography";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/button";
import ImageUploaderInput from "../../../components/ImageUploader";
import { useMutation } from "react-query";
import Cars from "../../../api/CarEndpoints";
import { Formik } from "formik";
import { sellCarValidationSchema } from "../components/sellCarValidationSchema";
import { useAuthStore } from "../../../zustand/stores";

function SellCar() {
  const [image, setImage] = React.useState<string[]>([]);
  const addImageToState = (uri: string) => {
    setImage((prevState) => [...prevState, uri]);
  };
  const removeImageFromState = (idx: number) => {
    image.filter((_, i) => i !== idx);
  };
  const { token, useRefreshToken, refreshToken } = useAuthStore();
  const {
    isLoading,
    mutate,
    error: createCarError,
  }: { isLoading: boolean; mutate: any; error: any } = useMutation(
    (data: any) => {
      return Cars.createCar(data, token, useRefreshToken, refreshToken);
    },
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  console.log(createCarError);
  return (
    <SafeArea>
      <SellCarHeader />
      <ScreenContainer>
        <Text variant="title">START SELLING</Text>
        <Text variant="body">
          start by selecting the car you want to sell and then fill in the
          details.
        </Text>

        {isLoading ? (
          <Text variant="caption">Submitting your data ....</Text>
        ) : (
          ""
        )}
        {/* {createCarError &&
          createCarError.errors.map(
            ({ message, idx }: { message: string; idx: number }) => (
              <Text variant="error" key={idx}>
                {message}
              </Text>
            )
          )} */}
        <Formik
          validationSchema={sellCarValidationSchema}
          initialValues={{
            title: "",
            decription: "",
            categoryId: "",
            price: 0,
          }}
          onSubmit={(values: any) => {
            if (image.length) {
              const formData = new FormData();
              formData.append("title", values.title);
              formData.append("description", values.description);
              formData.append("categoryId", values.categoryId);
              formData.append("price", values.price);
              image.forEach((uri) => {
                let fileType = uri.substring(uri.lastIndexOf(".") + 1);

                let formData = new FormData();

                formData.append("image", {
                  uri,
                  name: `photo.${fileType}`,
                  type: `image/${fileType}`,
                });
              });
              mutate(formData);
            }
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
            <FormContainer>
              <InputContainer>
                <Text variant="caption">CAR MODEL</Text>
                <CustomTextInput
                  placeholder="Car Model"
                  name="categoryId"
                  onChangeText={handleChange("categoryId")}
                  onBlur={handleBlur("categoryId")}
                  value={values.categoryId}
                  error={!!errors.categoryId}
                />
                {errors.categoryId && (
                  <Text variant="error">{errors.categoryId}</Text>
                )}
              </InputContainer>

              <InputContainer>
                <Text variant="caption">CAR name</Text>
                <CustomTextInput
                  placeholder="Car name"
                  name="title"
                  onChangeText={handleChange("title")}
                  onBlur={handleBlur("title")}
                  value={values.title}
                  error={!!errors.title}
                />

                {errors.title && <Text variant="error">{errors.title}</Text>}
              </InputContainer>

              <InputContainer>
                <Text variant="caption">CAR PRICE</Text>
                <CustomTextInput
                  name="price"
                  placeholder="Price"
                  onChangeText={handleChange("price")}
                  onBlur={handleBlur("price")}
                  value={values.price}
                  error={!!errors.price}
                />
                {errors.price && <Text variant="error">{errors.price}</Text>}
              </InputContainer>
              <InputContainer>
                <Text variant="caption">CAR DESCRIPTION</Text>
                <CustomTextInput
                  multiline={true}
                  name="description"
                  placeholder="description"
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  value={values.description}
                  error={!!errors.description}
                />
                {errors.description && (
                  <Text variant="error">{errors.description}</Text>
                )}
              </InputContainer>
              <InputContainer>
                <ImageUploaderInput
                  addImageToState={addImageToState}
                  image={image}
                  removeImageFromState={removeImageFromState}
                />
              </InputContainer>
              <ButtonContainer>
                <CustomButton text="Sell Car" onPress={handleSubmit} />
              </ButtonContainer>
            </FormContainer>
          )}
        </Formik>
      </ScreenContainer>
    </SafeArea>
  );
}

const ScreenContainer = styled.ScrollView`
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
`;
const FormContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} 0;
`;
const InputContainer = styled.View`
  padding: ${(props) => props.theme.space[1]} 0;
`;

export const ButtonContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} 0;
`;

export default SellCar;
