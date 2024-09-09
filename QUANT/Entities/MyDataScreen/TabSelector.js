import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TabSelector() {
  const [selected, setSelected] = useState("transaction");

  const transactionTabHandler = () => {
    setSelected("transaction");
  }

  const portfolioTabHandler = () => {
    setSelected("portfolio");
  }

  return (
    <View>
      <View style={styles.tabContainer}>
        <Pressable style={[styles.tab, selected === "transaction" && styles.selectedTab]} onPress={transactionTabHandler}>
          <Text style={[styles.tabText, selected === "transaction" && styles.selectedTabText]}>거래 내역</Text>
        </Pressable>
        <Pressable style={[styles.tab, selected === "portfolio" && styles.selectedTab]} onPress={portfolioTabHandler}>
          <Text style={[styles.tabText, selected === "portfolio" && styles.selectedTabText]}>포트폴리오</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    marginTop: 8
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  selectedTab: {
    borderBottomColor: "#FFAC30",
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  tabText: {
    color: "#767676",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: -0.45
  },
  selectedTabText: {
    color: "#FFAC30"
  }
})