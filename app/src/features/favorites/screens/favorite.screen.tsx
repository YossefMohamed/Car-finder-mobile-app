import React from "react";
import styled from "styled-components";
import CustomButton from "../../../components/button";
import { SafeArea } from "../../../components/safeArea";
import { Text } from "../../../components/typography";
import CarsInfoCard from "../../cars/components/cars-info-card/cars-info-card";

function Favorite() {
  return (
    <SafeArea>
      <FavoriteContainer>
        <Section>
          <Title>Favorite cars :</Title>
          <CustomButton text="Discover" />
        </Section>

        {data.map((item) => (
          <CarsInfoCard {...item} />
        ))}
      </FavoriteContainer>
    </SafeArea>
  );
}

const FavoriteContainer = styled.ScrollView`
  margin: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
`;

export const Title = styled.Text`
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

export default Favorite;

const data = [
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
