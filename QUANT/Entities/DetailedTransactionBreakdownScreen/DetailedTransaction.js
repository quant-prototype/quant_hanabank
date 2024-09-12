import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PencilIcon from "../../assets/images/pencil.svg";
import CircledCloseIcon from "../../assets/images/circledClose.svg";
import { useState } from "react";

export default function DetailedTransaction({dutched, data, transactionDate}) {
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
      <View style={[styles.memoInputContainer, isFocused && styles.foucsedMemoInputContainer]}>
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
      {dutched && (
        <>
          <View style={[styles.separator, {width: deviceWidth, left: -20}]} />
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
  foucsedMemoInputContainer: {
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
})