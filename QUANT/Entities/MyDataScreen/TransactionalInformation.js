import { FlatList, SectionList, StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";

const dummyData = [
  {
    date: "2024.08.16",
    transactions: [
      { name: "이*은", amount: 100000, type: "송금", time: "19:37" },
      { name: "박제준", amount: 100000, type: "송금", time: "19:37" },
      { name: "권*남", amount: 100000, type: "송금", time: "19:37" },
      { name: "김*우", amount: 100000, type: "송금", time: "19:37" },
      { name: "용용선생 강남점", amount: -500000, type: "외식", time: "19:37" }
    ]
  },
  {
    date: "2024.08.15",
    transactions: [
      { name: "수서고속철도", amount: -52600, type: "여행", time: "19:37" }
    ]
  },
  {
    date: "2024.08.14",
    transactions: [
      { name: "CU 공릉점", amount: -5800, type: "외식", time: "19:37" }
    ]
  },
  {
    date: "08-16",
    transactions: [
      { name: "이*은", amount: 100000, type: "송금", time: "19:37" },
      { name: "박제준", amount: 100000, type: "송금", time: "19:37" },
      { name: "권*남", amount: 100000, type: "송금", time: "19:37" },
      { name: "김*우", amount: 100000, type: "송금", time: "19:37" },
      { name: "용용선생 강남점", amount: -500000, type: "외식", time: "19:37" }
    ]
  },
  {
    date: "08-15",
    transactions: [
      { name: "수서고속철도", amount: -52600, type: "여행", time: "19:37" }
    ]
  },
  {
    date: "08-14",
    transactions: [
      { name: "CU 공릉점", amount: -5800, type: "외식", time: "19:37" }
    ]
  }
]

const processedData = dummyData.map((item) => ({
  title: item.date,
  data: item.transactions
}));

export default function TransactionalInformation() {
  const [transactionData, setTransactionData] = useState(processedData);

  const breakdown = ({item, index, section}) => {
    const lastItem = index === section.length-1;

    return (
      // <Pressable>
        <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.breakdownContainer, pressed && styles.pressedBreakdownContainer]}>
          <View style={styles.primaryContent}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={[styles.amountText, {color: item.amount > 0 ? "#3A4276" : "#505050"}]}>{item.amount > 0 ? `+${item.amount.toLocaleString()}원` : `${item.amount.toLocaleString()}원`}</Text>
          </View>
          <View style={styles.subContent}>
            <View style={styles.timeAndTypeContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
              <Text style={styles.typeText}>#{item.type}</Text>
            </View>
            <Text style={styles.balanceText}>잔액</Text>
          </View>
        </Pressable>
      // </Pressable>
    )
  }

  const transactionDate = ({section}) => { // section을 매개변수로 받음
    const firstItem = transactionData[0].title;

    return (
      <View>
        {firstItem !== section.title && <View style={styles.separator} />}
        <Text style={styles.dateText}>{section.title}</Text>
      </View>
    )
  }

  return (
      <SectionList
        sections={transactionData}
        // style={styles.listContainer}
        renderItem={breakdown}
        renderSectionHeader={transactionDate}
        contentContainerStyle={styles.listInnerContainer}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 16,
    paddingBottom: 50,
    position: "relative",
  },
  listInnerContainer: {
    // gap: 16,
    // backgroundColor: "blue",
    paddingBottom: 200,
  },
  breakdownContainer: {
    gap: 4,
    marginBottom:16
  },
  pressedBreakdownContainer: {
    opacity: 0.5
  },
  primaryContent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  nameText: {
    color: "#1B1D28",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: -0.45
  },
  amountText: {
    color: "#3A4276",
    fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: -0.45
  },
  subContent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  timeAndTypeContainer: {
    flexDirection: "row",
    gap: 12
  },
  timeText: {
    color: "#767676",
    fontFamily: "Pretendard",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.325
  },
  typeText: {
    color: "#FFAC30",
    fontFamily: "Pretendard",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.325
  },
  balanceText: {
    color: "#767676",
    fontFamily: "Pretendard",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.325
  },
  dateText: {
    color: "#505050",
    fontFamily: "Pretendard",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    letterSpacing: -0.35,
    marginBottom: 12,
    marginTop: 16
  },
  separator: {
    backgroundColor: "#F1F1F5",
    height: 1
  },
})