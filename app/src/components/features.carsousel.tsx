import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "./features.carsousel.card";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const data = [
    {
      iconName: "tachometer-alt",
      description: "0-100 Km/h",
      title: "3.6s",
    },
    {
      iconName: "dollar-sign",
      description: "200$",
      title: "Price",
    },
  ];
  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={1}
        ref={isCarousel}
        data={data}
        renderItem={(item: any) => <CarouselCardItem {...item} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={1.5}
        useScrollView={true}
        loop={true}
      />
    </View>
  );
};

export default CarouselCards;
