import { Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import CloseIcon from "../../assets/images/close.svg";

export default function CloseComponent() {
  return (
    <SafeAreaView>
      <View style={styles.closeContainer}>
        <Pressable style={styles.test}>
          <CloseIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  closeContainer: {
    paddingVertical: 14,
    alignItems: "flex-end",
    backgroundColor: "yellow"
  },
  test: {
    backgroundColor: "blue"
  }
})