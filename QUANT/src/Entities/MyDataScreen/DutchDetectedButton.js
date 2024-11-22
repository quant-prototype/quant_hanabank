import { Pressable, Text, StyleSheet } from "react-native"
import DetectIcon from "../../assets/images/detect.svg";
import { primeColor } from "../../Shared/Style/color";

export default function DutchDetectedButton() {
  return (
    <Pressable style={({pressed}) => [styles.detectContainer, pressed && styles.pressedDetectContainer]}>
      <DetectIcon />
      <Text style={styles.detectText}>더치페이 감지</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  detectContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primeColor,
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 100,
    position: "absolute",
    bottom: "30%",
    right: "5%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  pressedDetectContainer: {
    backgroundColor: "#e69b28",
    transform: [{ scale: 0.95 }],
  },
  detectText: {
    color: "white",
    fontFamily: "Pretendard",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: -0.35,
  }
})