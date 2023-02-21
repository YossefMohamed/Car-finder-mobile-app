import React from "react";
import { ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import CarouselCars from "../../../components/carousel";
import CarouselCards from "../../../components/features.carsousel";
import { SafeArea } from "../../../components/safeArea";
import Tag from "../../../components/tag";
import { Text } from "../../../components/typography";
import CarScreenHeader from "../components/header";
import {
  CarDetailsTitle,
  Description,
  DescriptionBody,
  Details,
  RatingContainer,
  Row,
  SwipperContainer,
  TagContainer,
  UserContainer,
  UserImage,
} from "./car.screen.styles";

function CarScreen() {
  return (
    <SafeArea>
      <ScrollView>
        <SwipperContainer>
          <CarScreenHeader />
          <CarouselCars />
        </SwipperContainer>
        <Details>
          <Row>
            <CarDetailsTitle>Audi RS7</CarDetailsTitle>
            <UserContainer>
              <UserImage
                source={{
                  uri: "https://images.unsplash.com/photo-1538689621163-f5be0ad13ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                }}
              />
              <Row>
                <Text variant="body">4.5</Text>
                <RatingContainer>
                  <SvgXml xml={star} width={15} height={15} />
                </RatingContainer>
              </Row>
            </UserContainer>
          </Row>
          <TagContainer>
            <Tag text="Overall" selected />
            <Tag text="Car" />
            <Tag text="Location" />
            <Tag text="Reviews" />
          </TagContainer>
          <CarouselCards />
          <Description>
            <Text variant="title">DESCRIPTION :</Text>
            <DescriptionBody>
              <Text variant="label">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                debitis consequuntur, labore culpa corporis est porro nisi, non
                voluptate iste laudantium ab excepturi maxime ut recusandae
                ullam perspiciatis, voluptatem illo.
              </Text>
            </DescriptionBody>
          </Description>
        </Details>
      </ScrollView>
    </SafeArea>
  );
}

export default CarScreen;
