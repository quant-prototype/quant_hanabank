import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { primeColor } from "../Style/color";

export default function BottomButton({text, handler, selected, fixedColor}) {
  const activateBackgroundColor = fixedColor ? primeColor : selected.length > 0 ? primeColor : "rgba(24, 205, 115, 0.15)";

  return (
    <SafeAreaView>
      <Pressable onPress={handler} android_ripple={{color: "ccc"}} style={({pressed}) => [styles.buttonContainer, {backgroundColor: activateBackgroundColor}, pressed && styles.pressedButton]}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 16,
    alignItems: "center",
    borderRadius: 8
  },
  pressedButton: {
    opacity: 0.8, 
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: -0.4
  }
})