import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function BottomButton({text, handler}) {
  return (
    <SafeAreaView>
      <Pressable onPress={handler} android_ripple={{color: "ccc"}} style={({pressed}) => [styles.buttonContainer, pressed && styles.pressedButton]}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#FFAC30",
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