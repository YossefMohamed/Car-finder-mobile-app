import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import reviewIcon from "../../../../../assets/reviewIcon";
import Tag from "../../../../components/tag";
import { Favourite } from "../../../../components/favourite";
import { Spacer } from "../../../../components/spacer";
import { Text } from "../../../../components/typography";
import {
  CardContainer,
  Description,
  Info,
  Rating,
  RestaurantCardCover,
  Row,
  Section,
} from "./cars-info-card.styles";
const CarsInfoCard: React.FC<any> = ({
  name = "Peugeot",
  icon = "S",
  photos = [
    "https://media.autoexpress.co.uk/image/private/s--VxqYOYmG--/f_auto,t_content-image-full-mobile@1/v1614096781/autoexpress/2021/02/Jaguar%20XF%202021%20-%20front%20driving.jpg",
  ],
  address = "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
  rating = 3.5,
  isOpen = true,
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <CardContainer>
      <Favourite />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="title">{name} </Text>
        <Section>
          <Rating>
            {ratingArray.map((_: undefined, idx) => (
              <SvgXml xml={star} width={20} height={20} key={idx} />
            ))}
          </Rating>
          <Spacer position="left" size="large">
            <Text variant="body">15</Text>
            <SvgXml xml={reviewIcon} width={20} height={20} />
          </Spacer>
        </Section>

        <Description>Card content</Description>
      </Info>
    </CardContainer>
  );
};

export default CarsInfoCard;
