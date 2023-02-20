import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar, Text } from "react-native-paper";
import styled from "styled-components";
import CarouselCars from "../../../components/carousel";
import { SafeArea } from "../../../components/safeArea";
import Tag from "../../../components/tag";
import CarsInfoCard from "../components/cars-info-card/cars-info-card";

const ListHeader = () => (
  <>
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
  </>
);

const CarsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (text: string) => setSearchQuery(text);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ListContainer>
        <CarsList
          data={[
            {
              name: "Peugeot",
              icon: "S",
              photos: [
                "https://media.autoexpress.co.uk/image/private/s--VxqYOYmG--/f_auto,t_content-image-full-mobile@1/v1614096781/autoexpress/2021/02/Jaguar%20XF%202021%20-%20front%20driving.jpg",
              ],
              address:
                "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
              rating: 3.5,
              isOpen: true,
            },
            {
              name: "BMW",
              icon: "S",
              photos: [
                "https://cdn.pixabay.com/photo/2020/06/13/16/29/fiat-5294867__340.jpg",
              ],
              address:
                "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
              rating: 4,
              isOpen: true,
            },
          ]}
          renderItem={({ item }: any) => {
            return (
              <TouchableOpacity>
                <CarsInfoCard {...item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item: { name: string }) => item.name}
          ListHeaderComponent={ListHeader}
        />
      </ListContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

const CarsList = styled(FlatList)`
  padding: ${(props) => props.theme.space[0]} 0;
`;

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
const ListContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export default CarsScreen;