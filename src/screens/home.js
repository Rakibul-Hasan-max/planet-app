import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { colors } from "../theme/colors";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
