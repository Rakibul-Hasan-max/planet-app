import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/text/text";

export default function Home() {
  return (
    <SafeAreaView>
      <Text preset="h2">THE PLANETS</Text>
    </SafeAreaView>
  );
}
