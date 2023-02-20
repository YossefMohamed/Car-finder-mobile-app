import * as React from "react";
import styled from "styled-components/native";
import { Text } from "./typography";

const Tag: React.FC<{ text: string }> = ({ text = "carTag" }) => {
  return (
    <TagContainer>
      <Text variant="caption">{text}</Text>
    </TagContainer>
  );
};

const TagContainer = styled.TouchableOpacity`
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[2]};
  background: ${(props) => props.theme.colors.brand.primary};
  border-radius: 5px;
  display: flex;
  margin: ${(props) => props.theme.space[1]};
  align-self: flex-start;
  font-weight: bold;
`;
export default Tag;
