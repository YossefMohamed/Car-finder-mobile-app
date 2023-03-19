import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import reviewIcon from "../../../../../assets/reviewIcon";
import Tag from "../../../../components/tag";
import { Favourite } from "../../../../components/favourite";
import { Text } from "../../../../components/typography";
import {
  CardContainer,
  CardContent,
  CardDetails,
  CardImage,
  CardRating,
  CardSecondaryTitle,
  CardTitle,
} from "./cars-info-card.styles";
import { Ionicons } from "@expo/vector-icons";

import { Spacer } from "../../../../components/spacer";
import { useNavigation } from "@react-navigation/native";
import { LovedContainer } from "../../../car/screens/car.screen.styles";
import { colors } from "../../../../infrastructure/theme/colors";
const CarsInfoCard: React.FC<any> = ({
  name = "Peugeot",
  id,
  icon = "S",
  photos = [
    "https://media.autoexpress.co.uk/image/private/s--VxqYOYmG--/f_auto,t_content-image-full-mobile@1/v1614096781/autoexpress/2021/02/Jaguar%20XF%202021%20-%20front%20driving.jpg",
  ],
  address = "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
  rating = 3.5,
  isOpen = true,
}) => {
  const navigation = useNavigation();
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    // <CardContainer>
    //   <Favourite />
    //   <RestaurantCardCover source={{ uri: photos[0] }} />
    //   <Info>
    //     <Text variant="title">{name} </Text>
    //     <Section>
    //       <Rating>
    // {ratingArray.map((_: undefined, idx) => (
    //   <SvgXml xml={star} width={20} height={20} key={idx} />
    // ))}
    //       </Rating>
    //       <Spacer position="left" size="large">
    //         <Text variant="body">15</Text>
    //         <SvgXml xml={reviewIcon} width={20} height={20} />
    //       </Spacer>
    //     </Section>

    //     <Description>Card content</Description>
    //   </Info>
    // </CardContainer>
    <CardContainer
      onPress={() =>
        navigation.navigate("CarScreen", {
          carId: id,
        })
      }
    >
      <LovedContainer
        onPress={() => navigation.getParent("filterDrawer").openDrawer()}
      >
        <Ionicons name="heart-outline" color={colors.brand.primary} size={20} />
      </LovedContainer>
      <CardImage source={{ uri: photos[0] }} />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <Text variant="caption">Egypt</Text>
        <Text variant="caption" style={{ marginTop: 10 }}>
          Lorem ipsum dolor sit amet consectetur ad...
        </Text>
        <CardRating>
          {ratingArray.map((_: undefined, idx) => (
            <SvgXml xml={star} width={20} height={20} key={idx} />
          ))}
          <Spacer position="left" size="large">
            <Text variant="label">{rating}</Text>
          </Spacer>
        </CardRating>
        <CardDetails>
          <View>
            <Text variant="caption">Days</Text>
            <Text variant="label">4 Days</Text>
          </View>
          <View>
            <Text variant="caption">Price</Text>
            <Text variant="label">$1500</Text>
          </View>
        </CardDetails>
      </CardContent>
    </CardContainer>
  );
};

export default CarsInfoCard;
