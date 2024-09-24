import { StyleSheet, View } from "react-native";
import CloseComponent from "../Shared/Components/CloseComponent";
import TabSelector from "../Entities/MyDataScreen/TabSelector";
import TransactionalInformation from "../Entities/MyDataScreen/TransactionalInformation";
import DutchDetectedButton from "../Entities/MyDataScreen/DutchDetectedButton";

export default function MyDataScreen() {
  return (
    <View style={styles.screen}>
      <CloseComponent />
      <TabSelector />
      {/* <DutchDetectedButton /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7FB",
    paddingHorizontal: 20
  }
})