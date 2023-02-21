import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import data from "./data";
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "./features.carsousel.card";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View style={{}}>
      <Carousel
        layout="default"
        layoutCardOffset={1}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
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
