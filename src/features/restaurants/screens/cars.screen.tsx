import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Searchbar, Text } from "react-native-paper";
import styled from "styled-components";
import CarouselCars from "../../../components/carousel";
import Tag from "../../../components/tag";
import CarsInfoCard from "../components/cars-info-card";

const CarsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (text: string) => setSearchQuery(text);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <ScrollView>
          <Title>Top Cars :</Title>

          <CarouselCars />
          <Title>Top Brands :</Title>

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
          <Title>Cars :</Title>

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
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const Title = styled(Text)`
  margin: ${(props) => props.theme.space[3]} 0;
  line-height: ${(props) => props.theme.lineHeights.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};

  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
// fontSize: props,
// fontWeight: "bold",
// borderBottomColor: "black",
// borderBottomWidth: 2,
// alignSelf: "flex-start",
export default CarsScreen;
