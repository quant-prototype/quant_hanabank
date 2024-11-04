import { FlatList, SectionList, StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DetectedDutchPayModal from "./DetectedDutchPayModal";
import DutchDetectedButton from "./DutchDetectedButton";

const dummyData = [
  {
    date: "2024.08.16",
    transactions: [
      { name: "용용선생 강남점", amount: -100000, type: "외식", time: "19:37", completedDutch: true, 
        dutchData: [
          {member: "이*은", amount: -100000,}, {member: "김*은", amount: -100000}, {member: "박*준", amount: -100000}, {member: "김*우", amount: -100000}, {member: "권*남", amount: -100000}, {member: "김*하", amount: -100000},  {member: "김*하", amount: -100000}, {member: "이*은", amount: -100000,}, {member: "김*은", amount: -100000}, {member: "박*준", amount: -100000}, {member: "김*우", amount: -100000}, {member: "권*남", amount: -100000}, {member: "김*하", amount: -100000},  {member: "김*하", amount: -100000}] }
    ],
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

const ductchDummyData = [
  {
    date: "2024.08.16",
    time: "19:37",
    name: "용용선생 강남점",
    amount: -500000    
  },
  {
    date: "2024.08.16",
    time: "19:37",
    name: "대한항공",
    amount: -500000    
  }
]

const processedData = dummyData.map((item) => ({
  title: item.date,
  data: item.transactions
}));

export default function TransactionalInformation() {
  const [transactionData, setTransactionData] = useState(processedData);
  const [dutchData, setDutchData] = useState(ductchDummyData);
  // const [completedDutch, setCompletedDutch] = useState()
  const [isModal, setIsModal] = useState(true);
  const navigation = useNavigation();

  const detailTransactionBreakdownHandler = (title,{data, date}) => {
    navigation.navigate("DetailedTransactionBreakdown", {title, data, date});
  }

  const breakdown = ({item, index, section}) => {
    const lastItem = index === section.length-1;
    const sliceMember = item.completedDutch && item.dutchData.slice(0,5);
    const extraMember = item.completedDutch && item.dutchData.length > 5 && item.dutchData.length - 5;

    return (
      // <Pressable>
        <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.breakdownContainer, pressed && styles.pressedBreakdownContainer]} onPress={() => detailTransactionBreakdownHandler("상세거래내역",{data: item, date: section.title})}>
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
          {item.completedDutch && (
            <View style={styles.dutchMemberContainer}>
              <Text style={styles.dutchMemberText}>더치페이 멤버</Text>
              <View style={styles.dutchMemberNameContainer}>
                {sliceMember.map((data, index) => {
                  return (
                    <View key={index} style={styles.dutchMemberNameBox}>
                      <Text style={styles.dutchMemberNameText}>{data.member}</Text>
                    </View>
                  )
                })}
                {extraMember > 0 && <Text style={styles.extraMemberText}>+{extraMember}</Text>}
              </View>
            </View>
          )}
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
      <View>
        <SectionList
          sections={transactionData}
          // style={styles.listContainer}
          renderItem={breakdown}
          renderSectionHeader={transactionDate}
          contentContainerStyle={styles.listInnerContainer}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
        <DutchDetectedButton />
        {isModal && <DetectedDutchPayModal isModal={isModal} setIsModal={setIsModal} dutchData={dutchData} />}
      </View>
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
    paddingBottom: 250,
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
    fontFamily: "Pretendard-600",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 26,
    letterSpacing: -0.45
  },
  amountText: {
    color: "#3A4276",
    fontFamily: "Pretendard-600",
    fontSize: 18,
    fontStyle: "normal",
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
    fontFamily: "Pretendard-400",
    fontSize: 13,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.325
  },
  typeText: {
    color: "#FFAC30",
    fontFamily: "Pretendard-400",
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.325
  },
  balanceText: {
    color: "#767676",
    fontFamily: "Pretendard-400",
    fontSize: 13,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.325
  },
  dateText: {
    color: "#505050",
    fontFamily: "Pretendard-400",
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: -0.35,
    marginBottom: 12,
    marginTop: 16
  },
  separator: {
    backgroundColor: "#F1F1F5",
    height: 1
  },
  dutchMemberContainer: {
    marginTop: 12,
    gap: 4
  },
  dutchMemberText: {
    color: "#505050",
    fontFamily: "Pretendard-600",
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 18,
  },
  dutchMemberNameContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  dutchMemberNameBox: {
    backgroundColor: "#FFAC30",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 100
  },
  dutchMemberNameText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 18,
    left: -0.3
  },
  extraMemberText: {
    color: "505050",
    fontFamily: "Pretendard-600",
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 20,
  }
})