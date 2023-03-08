import * as React from "react";
import styled from "styled-components/native";
import { Text } from "./typography";

const Tag: React.FC<{
  text: string;
  selected?: boolean;
  onPress?: () => void;
}> = ({ text = "carTag", selected = false, onPress }) => {
  return (
    <TagContainer selected={selected} onPress={onPress && onPress}>
      <Text variant="caption">{text}</Text>
    </TagContainer>
  );
};

const TagContainer = styled.TouchableOpacity<{ selected: boolean }>`
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[2]};
  background: ${(props) =>
    props.selected
      ? props.theme.colors.tags.primary
      : props.theme.colors.tags.secondary};

  border-radius: 10px;
  display: flex;
  margin: ${(props) => props.theme.space[1]};
  align-self: flex-start;
  font-weight: bold;
  color: ${(props) =>
    props.selected
      ? props.theme.colors.text.inverse
      : props.theme.colors.text.primary};
`;
export default Tag;
