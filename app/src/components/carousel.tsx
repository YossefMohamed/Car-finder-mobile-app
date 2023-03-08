import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components";

const styles = StyleSheet.create({
  wrapper: { height: 500, borderRadius: 1000, overflow: "hidden" },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
const CarouselCars = () => {
  return (
    <Swiper style={styles.wrapper}>
      <ImageSwipper
        source={{
          uri: "https://media.autoexpress.co.uk/image/private/s--VxqYOYmG--/f_auto,t_content-image-full-mobile@1/v1614096781/autoexpress/2021/02/Jaguar%20XF%202021%20-%20front%20driving.jpg",
        }}
      />
      <ImageSwipper
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/06/13/16/29/fiat-5294867__340.jpg",
        }}
      />
      <ImageSwipper
        source={{
          uri: "https://media.autoexpress.co.uk/image/private/s--VxqYOYmG--/f_auto,t_content-image-full-mobile@1/v1614096781/autoexpress/2021/02/Jaguar%20XF%202021%20-%20front%20driving.jpg",
        }}
      />
    </Swiper>
  );
};

const ImageSwipper = styled.Image`
  width: 100%;
  height: 100%;
  align-self: center;
  resize-mode: stretch;
`;

export default CarouselCars;
