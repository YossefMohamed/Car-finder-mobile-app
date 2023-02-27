import React from "react";
import styled from "styled-components";

function CustomTextInput({
  value,
  name,
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  keyboardType,
  error,
}: {
  name?: string;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: boolean;
  onChangeText: (text: string) => void;
  onBlur?: any;
  keyboardType?: any;
}) {
  return (
    <CustomTextInputStyled
      onBlur={onBlur}
      error={error}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      name={name}
      hasValue={!!value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

export default CustomTextInput;

const CustomTextInputStyled = styled.TextInput<{
  hasValue: boolean;
  error: boolean;
}>`
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
  ${(props) => props.error && `border-color:${props.theme.colors.text.error}`}
`;
