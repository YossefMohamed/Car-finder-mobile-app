import React from "react";
import styled from "styled-components";

function CustomTextInput({
  value,
  placeholder,
  secureTextEntry,
  onChangeText,
}: {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}) {
  return (
    <CustomTextInputStyled
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      hasValue={!!value}
      onChangeText={onChangeText}
    />
  );
}

export default CustomTextInput;

const CustomTextInputStyled = styled.TextInput<{ hasValue: boolean }>`
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[1]};
  margin: ${(props) => props.theme.space[1]} 0;
  border :transparent 2px solid
  ${(props) =>
    props.hasValue && ` border :${props.theme.colors.brand.primary} 2px solid `}
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 2;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
