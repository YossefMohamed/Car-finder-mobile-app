import * as React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Tag: React.FC<{ text: string }> = ({ text = "carTag" }) => {
  return <TagContainer>{text}</TagContainer>;
};

const TagContainer = styled.Text`
  padding: 5px 8px;
  background: black;
  color: white;
  border-radius: 5px;
  display: flex;
  margin: 5px 5px 5px 0;
  align-self: flex-start;
  font-weight: bold;
`;
export default Tag;
