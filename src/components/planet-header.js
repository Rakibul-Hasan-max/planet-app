import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomWidth: 0.3,
    borderBottomColor: colors.grey,
  },
});
