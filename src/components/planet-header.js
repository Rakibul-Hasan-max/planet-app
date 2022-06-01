import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function PlanetHeader({ backBtn, title = "THE PLANETS" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: spacing[2] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={22} color="white" />
        </Pressable>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomWidth: 0.3,
    borderBottomColor: colors.grey,
    flexDirection: "row",
    alignItems: "center",
  },
});
