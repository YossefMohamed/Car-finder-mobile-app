import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import CustomButton from "../../../components/button";
import CarouselCars from "../../../components/carousel";
import CarouselCards from "../../../components/features.carsousel";
import { SafeArea } from "../../../components/safeArea";
import Tag from "../../../components/tag";
import { Text } from "../../../components/typography";
import CarScreenHeader from "../components/header";

import {
  ButtonContainer,
  Description,
  DescriptionBody,
  Details,
  Overall,
  PriceCotnainer,
  RatingContainer,
  Row,
  SwipperContainer,
  TagContainer,
  UserContainer,
  UserImage,
} from "./car.screen.styles";
import DialogComponent from "../../../components/Dialog";
import SnackBar from "../../../components/snackBar";
import { RouteProp } from "@react-navigation/native";
import Cars from "../../../api/CarEndpoints";
import { useQuery } from "react-query";
import LoadingSpinner from "../../../components/loadingSpinner";

interface CarScreenProp {
  route: {
    params: {
      carId: string;
    };
  };
}
function CarScreen({ route }: CarScreenProp) {
  const [overall, setOverall] = useState(false);
  const [dialogAppear, setDialogAppear] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = React.useState(false);
  const { carId } = route.params;
  const { data: carData, isLoading: carIsLoading } = useQuery(["car"], () =>
    Cars.getCar(carId)
  );
  return (
    <SafeArea>
      {carIsLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ScrollView>
            <DialogComponent
              visible={dialogAppear}
              setVisible={setDialogAppear}
              action={() => setSnackBarVisible(true)}
            />
            <SwipperContainer>
              <CarScreenHeader />
              <CarouselCars />
            </SwipperContainer>
            <Details>
              <Row>
                <Text variant="title">{carData.title}</Text>
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
                <Tag
                  text="Overall"
                  selected={overall}
                  onPress={() => setOverall(true)}
                />
                <Tag
                  text="Description"
                  selected={!overall}
                  onPress={() => setOverall(false)}
                />
              </TagContainer>

              {overall ? (
                <Overall>
                  <CarouselCards />
                </Overall>
              ) : (
                <Overall>
                  <Description>
                    <Text variant="title">DESCRIPTION :</Text>
                    <DescriptionBody>
                      <Text variant="paragraph">{carData.description}</Text>
                    </DescriptionBody>
                  </Description>
                </Overall>
              )}
            </Details>
          </ScrollView>
          <ButtonContainer>
            <PriceCotnainer>
              <Text variant="title">$0.85</Text>
            </PriceCotnainer>

            <CustomButton
              text="Contact seller"
              onPress={() => {
                setDialogAppear((prev) => !prev);
              }}
            />
          </ButtonContainer>

          <SnackBar
            visible={snackBarVisible}
            setVisible={setSnackBarVisible}
            message="Copied to clipboard"
          />
        </>
      )}
    </SafeArea>
  );
}

export default CarScreen;
