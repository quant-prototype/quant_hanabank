import { Dimensions, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PencilIcon from "../../assets/images/pencil.svg";
import CircledCloseIcon from "../../assets/images/circledClose.svg";
import { useState } from "react";
import BottomButton from "../../Shared/Components/BottomButton";

export default function DetailedTransaction({data, transactionDate}) {
  const [isFocused, setIsFocused] = useState(false);
  const [memoText, setMemoText] = useState("");

  const deviceWidth = Dimensions.get("window").width;

  const memoInputHandler = (enteredText) => {
    setMemoText(enteredText);
    if(enteredText.length > 0) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }

  const memoInputCloseHandler = () => {
    setMemoText("");
  }

  return (
    <>
      <Text style={styles.nameText}>{data.name}</Text>
      <Text style={styles.amountText}>{data.amount > 0 ? `+${data.amount.toLocaleString()}원` : `${data.amount.toLocaleString()}원`}</Text>
      <View style={[styles.memoInputContainer, isFocused && styles.focusedMemoInputContainer]}>
        <TextInput placeholder="메모 입력 (20자 내외)" value={memoText} maxLength={20} onChangeText={memoInputHandler} onBlur={() => setIsFocused(false)} />
        {isFocused ? <Pressable onPress={memoInputCloseHandler}><CircledCloseIcon style={styles.circledClose} /></Pressable> : <PencilIcon />}
      </View>
      <View style={styles.subDetailedContainer}>
        <View style={styles.subDetailedContentContainer}>
          <Text style={styles.subDetailedContentText}>거래유형</Text>
          <Text style={styles.subDetailedContentText}>{data.type}</Text>
        </View>
        <View style={styles.subDetailedContentContainer}>
          <Text style={styles.subDetailedContentText}>거래일시</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.subDetailedContentText}>{transactionDate}</Text>
            <Text style={styles.subDetailedContentText}>{data.time}</Text>
          </View>
        </View>
        <View style={styles.subDetailedContentContainer}>
          <Text style={styles.subDetailedContentText}>거래 후 잔액</Text>
          <Text style={styles.subDetailedContentText}></Text>
        </View>
      </View>
      {data.completedDutch && (
        <>
          <View style={[styles.separator, {width: deviceWidth, left: -20}]} />
          <Text style={styles.dutchPayMemberText}>더치페이 인원</Text>
          <View style={styles.dutchPayMemberContainer}>
            <ScrollView>
              <View style={styles.dutchPayMemberNameContainer}>
                {data.dutchData.map((item, index) => {
                  return (
                    <View style={styles.dutchMemberNameContainer} key={index}>
                      <View style={styles.dutchMemberNameBox}>
                        <Text>{item.member}</Text>
                      </View>
                      <Text style={styles.subDetailedContentText}>{item.amount < 0 ? (item.amount*-1).toLocaleString() : item.amount.toLocaleString()}원</Text>
                    </View>
                  )
                })}
              </View>
              <View style={styles.informBoxContainer}>
                <View style={styles.informBox}>
                  <Text style={styles.informText}></Text>
                  <Text style={styles.amountText}></Text>
                </View>
                <View style={styles.informBox}>
                  <Text style={styles.informText}></Text>
                  <Text style={styles.informAmountText}></Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <BottomButton text="확인" />
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  nameText: {
    color: "#1B1D28",
    fontFamily: "Prentendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
    letterSpacing: -0.45,
    marginTop: 24
  },
  amountText: {
    color: "#1B1D28",
    fontFamily: "Prentendard",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 38,
    letterSpacing: -0.7,
    marginTop: 8
  },
  memoInputContainer: {
    marginTop: 22,
    flexDirection: "row",
    gap: 4,
    // backgroundColor: "green"
  },
  focusedMemoInputContainer: {
    justifyContent: "space-between"
  },
  subDetailedContainer: {
    marginTop: 70,
    gap: 20,
  },
  subDetailedContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subDetailedContentText: {
    color: "#1B1D28",
    fontFamily: "Prentendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  separator: {
    backgroundColor: "#F1F1F5",
    height: 2,
    marginTop: 24,
  },
  dutchPayMemberContainer: {
    flex: 1,
    backgroundColor: "pink",
    // flexGrow: 1,
    // paddingBottom: 200
  },
  dutchPayMemberText: {
    color: "#1B1D28",
    fontFamily: "Prentendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: -0.4,
    marginTop: 24,
  },
  dutchPayMemberNameContainer: {
    marginTop: 12,
    gap: 16
  },
  dutchMemberNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  dutchMemberNameBox: {
    backgroundColor: "#FFAC30",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 100
  },
  informBoxContainer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 24
  },
  informBox: {
    paddingVertical: 20,
    paddingHorizontal: 44,
    gap: 2,
    backgroundColor: "#FFDFBA",
    borderRadius: 12,
    flex: 1
  },
  informText: {
    color: "#1B1D28",
    fontFamily: "Prentendard",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -0.325,
  },
  informAmountText:{
    color: "#1B1D28",
    fontFamily: "Prentendard",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: -0.4,
  }
})