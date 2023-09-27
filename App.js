import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { MyButton } from "./components/MyButton";
import { StyleSheet, Text, View } from "react-native";
import { ScrollListView } from "./components/ScrollListView";
import { FlatListView } from "./components/FlatListView";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function App() {
  const [display, setDisplay] = useState("flat-list-view");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text>Header</Text>
        <View style={{ flex: 1, backgroundColor: "yellow" }}>
          {display === "flat-list-view" ? <FlatListView /> : <ScrollListView />}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "center",
            margin: 20,
          }}
        >
          <MyButton
            title="flat-list-view"
            onPress={() => setDisplay("flat-list-view")}
          />
          <MyButton
            title="scroll-list-view"
            onPress={() => setDisplay("scroll-list-view")}
          />
        </View>

        <Text>Footer</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
