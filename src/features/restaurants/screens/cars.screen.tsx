import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Searchbar, Text, Title } from "react-native-paper";
import CarouselCars from "../../../components/carousel";
import Tag from "../../../components/tag";
import CarsInfoCard from "../components/cars-info-card";

const CarsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (text: string) => setSearchQuery(text);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ padding: 16 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <ScrollView>
          <Title style={{ ...styles.title, color: "white" }}>Top Cars :</Title>

          <CarouselCars />
          <Title style={styles.title}>Top Brands :</Title>

          <View style={styles.tagsContainer}>
            <Tag text="BMW" />
            <Tag text="Tesla" />
            <Tag text="Porsche " />
            <Tag text="Ford " />
            <Tag text="Kia " />
            <Tag text="Honda" />
            <Tag text="Peugeot" />
            <Tag text="Mazda" />
            <Tag text="Volvo" />
            <Tag text="Jaguar" />
          </View>
          <Title style={styles.title}>Top Cars :</Title>

          <CarsInfoCard />
          <CarsInfoCard />
          <CarsInfoCard />
          <CarsInfoCard />
          <CarsInfoCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignSelf: "flex-start",
    paddingVertical: 5,
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default CarsScreen;
