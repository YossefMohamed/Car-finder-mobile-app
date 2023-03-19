import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import CustomButton from "../../../components/button";
import CarouselCars from "../../../components/carousel";
import { SafeArea } from "../../../components/safeArea";
import Tag from "../../../components/tag";
import CarsInfoCard from "../components/cars-info-card/cars-info-card";
import ScreenHeader from "../components/screen-header";
import SearchComponent from "../components/search-component";
import { useQuery } from "react-query";
import Categories from "../../../api/CategoriesEndpoints";
import LoadingSpinner from "../../../components/loadingSpinner";
import Cars from "../../../api/CarEndpoints";

const ListHeader = ({ onChangeSearch, searchQuery, categories }: any) => (
  <>
    <ScreenHeader />

    <SearchComponent
      onChangeSearch={onChangeSearch}
      searchQuery={searchQuery}
    />
    <TagContainer>
      {categories.map((category: any, idx: number) => (
        <Tag text={category.title} key={idx} />
      ))}
    </TagContainer>
    <Section>
      <Title>New cars :</Title>
      <CustomButton text="More" />
    </Section>
  </>
);

const carData = [
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
];

const tags = [
  "BMW",
  "Tesla",
  "Porsche",
  "Ford",
  "Honda",
  "Kia",
  "Peugeot",
  "Mazda",
  "Volvo",
  "Jaguar",
  "Others",
];

const CarsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (text: string) => setSearchQuery(text);
  const { data: categories, isLoading } = useQuery(["categories"], () =>
    Categories.getCategories()
  );
  const { data: carsList, isLoading: carsListLoading } = useQuery(
    ["cars"],
    () => Cars.getCars()
  );

  console.log(carsList);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <SafeArea>
          {isLoading}
          <CarsList
            data={carsList}
            renderItem={({ item }) => <CarsInfoCard {...item} />}
            keyExtractor={(item, index: number) => `${index}`}
            ListHeaderComponent={<ListHeader categories={categories} />}
          />
        </SafeArea>
      )}
    </>
  );
};

const TagContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const CarsList = styled(FlatList)`
  padding: ${(props) => props.theme.space[0]} ${(props) => props.theme.space[2]};
`;

export const Title = styled(Text)`
  margin: ${(props) => props.theme.space[3]} 0;
  line-height: ${(props) => props.theme.lineHeights.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  text-transform: uppercase;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export default CarsScreen;
