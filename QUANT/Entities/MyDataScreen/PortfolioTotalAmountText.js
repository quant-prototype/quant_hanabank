import { StyleSheet, Text } from "react-native";

export default function PortfolioToTalAmountText({totalAmount}) {
  return (
    <>
      <Text style={styles.totalAmountText}>총 소비 금액</Text>
      <Text style={styles.totalAmount}>{totalAmount.toLocaleString()}원</Text>
    </>
  )
}

const styles = StyleSheet.create({
  totalAmountText: {
    marginTop: 24,
    textAlign: "center",
    color: "#1B1D28",
    fontFamily: "Pretendard-400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4
  },
  totalAmount: {
    marginTop: 4,
    textAlign: "center",
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 24,
    lineHeight: 34,
    letterSpacing: -0.6
  }
})