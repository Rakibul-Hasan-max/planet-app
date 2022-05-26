import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/theme/colors";
import { spacing } from "./src/theme/spacing";
import {useFonts} from "expo-font"

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf')
  })

  if (!loaded) {
    return <Text>Font is loading</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Antonio-Medium', fontSize: spacing[4]}}>This is planet app</Text>
      <Text style={{marginTop: spacing[4]}}>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});
