import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ navigation, route }) {
  const planet = route.params.planet;

  const { name, description, avgTemp, radius, revolutionTime, rotationTime } =
    planet;

  // const renderImage = (name) => {
  //   switch (name) {
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "mercury":
  //       return <MercurySvg />;
  //     case "mercury":
  //       return <MercurySvg />;
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        {/* <View style={styles.imageView}>{renderImage(name)}</View> */}

        <View style={styles.detailsView}>
          <Text preset="h1" style={{ textTransform: "uppercase" }}>
            {name}
          </Text>

          <Text style={styles.description}>{description}</Text>

          <Pressable style={styles.source}>
            <Text>Source:</Text>
            <Text preset="h4" style={styles.wiki}>
              Wikipedia
            </Text>
          </Pressable>
        </View>

        <View style={{ height: 40 }} />

        <View>
          <PlanetSection title="ROTATION TIME" value={rotationTime} />
          <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
          <PlanetSection title="RADIUS" value={radius} />
          <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 20,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[5],
  },
  wiki: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
