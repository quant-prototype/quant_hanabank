import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import TransactionalInformation from "./TransactionalInformation";
import Portfolio from "./Portfolio";

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
        <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.tab, selected === "transaction" && styles.selectedTab, pressed && styles.pressedTab]} onPress={transactionTabHandler}>
          <Text style={[styles.tabText, selected === "transaction" && styles.selectedTabText]}>거래 내역</Text>
        </Pressable>
        <Pressable style={({pressed}) => [styles.tab, selected === "portfolio" && styles.selectedTab, pressed && styles.pressedTab]} onPress={portfolioTabHandler}>
          <Text style={[styles.tabText, selected === "portfolio" && styles.selectedTabText]}>포트폴리오</Text>
        </Pressable>
      </View>
      {selected === "transaction" && <TransactionalInformation />}
      {selected === "portfolio" && (
        <ScrollView>
          <Portfolio />
        </ScrollView>
      )}
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
    justifyContent: "center",
    // backgroundColor: "blue"
  },
  selectedTab: {
    borderBottomColor: "#FFAC30",
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  pressedTab: {
    opacity: 0.5
  },
  tabText: {
    color: "#767676",
    fontFamily: "Pretendard-600",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 26,
    letterSpacing: -0.45
  },
  selectedTabText: {
    color: "#FFAC30"
  }
})