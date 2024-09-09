import { StyleSheet, View } from "react-native";
import CloseComponent from "../Shared/Components/CloseComponent";

export default function MyDataScreen() {
  return (
    <View style={styles.screen}>
      <CloseComponent />
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