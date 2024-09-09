import { StyleSheet, View } from "react-native";
import CloseComponent from "../Shared/Components/CloseComponent";
import TabSelector from "../Entities/MyDataScreen/TabSelector";

export default function MyDataScreen() {
  return (
    <View style={styles.screen}>
      <CloseComponent />
      <TabSelector />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20
  }
})