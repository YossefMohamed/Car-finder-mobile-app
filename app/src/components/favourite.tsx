import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = () => {
  return (
    <FavouriteButton>
      <AntDesign name={"heart"} size={24} color={"white"} />
    </FavouriteButton>
  );
};
