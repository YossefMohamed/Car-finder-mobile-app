import { Platform, SafeAreaView, Text, View, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { Provider as PaperProvider, Searchbar } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (text: string) => setSearchQuery(text);
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: "purple" }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "violet" }}>
          <Text>Content</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}
