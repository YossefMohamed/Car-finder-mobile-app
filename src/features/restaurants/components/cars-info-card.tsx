import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Card } from "react-native-paper";

const CarsInfoCard: React.FC<any> = ({
  name = "BWM",
  icon = "S",
  photos = [
    "https://pix10.agoda.net/hotelImages/281/28117539/28117539_210919224500105697246.jpg?s=768x1024",
  ],
  address = "https://yt3.ggpht.com/nm9y8xW12znqtYE6aVDZuiH862z4iC7hrxQWIBXfqhiD5lqKS5ScZSAvZHsLlgbuzDMtf82z=s48-c-k-c0x00ffffff-no-nd-rj",
  rating = 3.5,
  available = true,
}) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={{ borderRadius: 0 }} />
      <Card.Content style={{ marginVertical: 10 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.content}>Card content</Text>
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
export default CarsInfoCard;
