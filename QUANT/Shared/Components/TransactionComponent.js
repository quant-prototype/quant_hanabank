import { Pressable, SectionList, StyleSheet, Text, View } from "react-native";

export default function TransactionComponent({transactionData, detailTransactionBreakdownHandler, detailCategory}) {
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
    <SectionList
      sections={transactionData}
      renderItem={breakdown}
      renderSectionHeader={transactionDate}
      contentContainerStyle={[styles.listInnerContainer, detailCategory=="detailCategory" && {paddingBottom: 50}]}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listInnerContainer: {
    // gap: 16,
    // backgroundColor: "aqua",
    paddingBottom: 250,
  },
  breakdownContainer: {
    gap: 4,
    marginBottom:16
  },
  pressedBreakdownContainer: {
    opacity: 0.5
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