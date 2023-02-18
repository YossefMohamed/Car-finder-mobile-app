import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: { height: 300, borderRadius: 1000, overflow: "hidden" },
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
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: "https://pix10.agoda.net/hotelImages/281/28117539/28117539_210919224500105697246.jpg?s=768x1024",
        }}
      />
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

export default CarouselCars;
