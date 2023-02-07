import * as React from "react";
import { Chip } from "react-native-paper";

const Tags = () => {
  return (
    <Chip
      icon="information"
      onPress={() => console.log("Pressed")}
      mode="outlined"
      style={{ margin: 2 }}
    >
      Example Chip
    </Chip>
  );
};

export default Tags;
