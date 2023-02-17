import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import styled from "styled-components";
import star from "./../../../../assets/star";
import open from "./../../../../assets/open";
const CarsInfoCard: React.FC<any> = ({
  name = "BWM",
  icon = "S",
  photos = [
    "https://pix10.agoda.net/hotelImages/281/28117539/28117539_210919224500105697246.jpg?s=768x1024",
  ],
  address = "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
  rating = 3.5,
  isOpen = true,
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={{ borderRadius: 0 }} />
      <Card.Content style={{ marginVertical: 10 }}>
        <CardTitle>{name} </CardTitle>
        <Section>
          <Row>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Row>
          {isOpen && <SvgXml xml={open} width={20} height={20} />}
        </Section>

        <CardContent>Card content</CardContent>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    marginTop: 5,
  },
});

const CardTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const CardContent = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

const Section = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
  justify-content: space-between;
`;

const Row = styled(View)`
  flex-direction: row;
`;

export default CarsInfoCard;
