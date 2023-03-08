import React from "react";
import { SafeArea } from "../../../components/safeArea";
import SellCarHeader from "../components/sellCar.header";
import styled from "styled-components";
import { Text } from "../../../components/typography";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/button";
import ImageUploaderInput from "../../../components/ImageUploader";

function SellCar() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const ValidatePrice = (text: string) => {
    setPrice(text.replace(/[^0-9]/g, ""));
  };

  return (
    <SafeArea>
      <SellCarHeader />
      <ScreenContainer>
        <Text variant="title">START SELLING</Text>
        <Text variant="body">
          start by selecting the car you want to sell and then fill in the
          details.
        </Text>
        <FormContainer>
          <InputContainer>
            <Text variant="caption">CAR MODEL</Text>
            <CustomTextInput placeholder="Car Model" />
          </InputContainer>
          <InputContainer>
            <Text variant="caption">CAR YEAR</Text>

            <CustomTextInput placeholder="Car Year" />
          </InputContainer>
          <InputContainer>
            <Text variant="caption">CAR PRICE</Text>
            <CustomTextInput
              placeholder="Car Price"
              keyboardType="numeric"
              onChangeText={ValidatePrice}
              value={price}
            />
          </InputContainer>
          <InputContainer>
            <Text variant="caption">CAR DESCRIPTION</Text>
            <CustomTextInput multiline={true} placeholder="Car Description" />
          </InputContainer>
          <InputContainer>
            <ImageUploaderInput />
          </InputContainer>
          <ButtonContainer>
            <CustomButton text="Sell Car" onPress={() => {}} />
          </ButtonContainer>
        </FormContainer>
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
