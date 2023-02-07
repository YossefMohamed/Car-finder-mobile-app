import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Searchbar, Text, Title } from "react-native-paper";
import Tags from "../../../components/tags";
import CarsInfoCard from "../components/cars-info-card";

const CarsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (text: string) => setSearchQuery(text);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ padding: 16 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,
        }}
      >
        <ScrollView>
          <View style={{ display: "flex" }}>
            <Tags />
            <Tags />
            <Tags />
            <Tags />
            <Tags />
          </View>
          <Title style={styles.title}>Top Cars :</Title>

          <CarsInfoCard />
          <CarsInfoCard />
          <CarsInfoCard />
          <CarsInfoCard />
          <CarsInfoCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 25,
    textTransform: "uppercase",
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignSelf: "flex-start",
    paddingVertical: 5,
  },
});
export default CarsScreen;
