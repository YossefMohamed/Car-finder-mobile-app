import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (
  position: "top" | "left" | "right" | "bottom",
  size: "small" | "medium" | "large" | "xl" | "xxl",
  theme: any
) => {
  const sizeIndex: number = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled.View<{ variant: string }>`
  ${(props: { variant: string }) => props.variant};
  flex-direction: row;
  align-items: flex-end;
`;

export type Props = {
  position: "top" | "left" | "right" | "bottom";
  size: "small" | "medium" | "large" | "xl" | "xxl";
  children?: React.ReactNode;
};

export const Spacer: React.FC<Props> = ({
  position = "top",
  size = "small",
  children,
}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
