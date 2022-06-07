import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { PLANET_LIST } from "../data/planet-list";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Colors } from "react-native/Libraries/NewAppScreen";

const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circle, { backgroundColor: color }]} />
        <Text preset="h4" style={styles.itemName}>
          {name}
        </Text>
      </View>
      <AntDesign name="right" size={14} color="white" />
    </Pressable>
  );
};

export default function Home() {
  const [list, setList] = useState(PLANET_LIST);
  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();

      return itemName.indexOf(userTypedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={Colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circle: {
    height: 26,
    width: 26,
    borderRadius: 13,
  },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderWidth: 0.3,
    borderBottomColor: colors.grey,
  },
  searchInput: {
    color: colors.white,
    padding: spacing[3],
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});
