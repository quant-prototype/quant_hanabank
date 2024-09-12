import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LeftArrowIcon from "../../assets/images/leftArrow.svg";

export default function BackComponent({title, backPageHandler}) {
  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Pressable onPress={backPageHandler}>
          <LeftArrowIcon />
        </Pressable>
        {title && <Text style={styles.titleText}>{title}</Text>}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    paddingVertical: 14,
    // paddingHorizontal: 20,
    backgroundColor: "yellow"
  },
  titleText: {
    color: "#1B1D28",
    fontFamily: "Pretendard",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: -0.5
  }
})