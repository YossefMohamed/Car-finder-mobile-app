import React from "react";
import { Image, View } from "react-native";

const defaultImage =
  "https://images.unsplash.com/photo-1538689621163-f5be0ad13ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

const ImageContainer = (props: any) => {
  const { shadowStyle, source } = props;
  return (
    <View style={shadowStyle}>
      <Image
        borderRadius={24}
        style={{
          top: -16,
          left: -48,
          width: 115,
          height: 170,
          position: "absolute",
        }}
        source={source}
      />
    </View>
  );
};

const ImageContainerStyles = {
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  imageStyle: {
    top: -16,
    left: -48,
    width: 115,
    height: 170,
    position: "absolute",
  },
};
export default ImageContainer;
