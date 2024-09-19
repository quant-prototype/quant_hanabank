
import { Dimensions, Keyboard, Pressable, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import BackComponent from "../Shared/Components/BackComponent";
import { useState } from "react";
import DetailedTransaction from "../Entities/DetailedTransactionBreakdownScreen/DetailedTransaction";
import BottomButton from "../Shared/Components/BottomButton";

export default function DetailedTransactionBreakdownScreen({navigation, route}) {
  const [dutched, setDutched] = useState(true);

  const backPageHandler = () => {
    navigation.goBack();
  }

  const title = route.params.title;
  const data = route.params.data;
  const transactionDate = route.params.date;

  return (
    <>
      <View style={styles.screen}>
        <BackComponent title={title} backPageHandler={backPageHandler} />
        <DetailedTransaction data={data} transactionDate={transactionDate} />
        <View style={styles.bottomButtonContainer}>
          <BottomButton text="확인" />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20
  },
  bottomButtonContainer: {
   paddingTop: 13,
   paddingHorizontal: 20,
   backgroundColor: "white",
   position: "absolute",
   bottom: 0,
   right: 0,
   left: 0,
   shadowColor: "rgba(247, 247, 251, 0.36)",
   shadowOffset: { width: 0, height: -10 },
   shadowOpacity: 0.8,
   elevation: 5
  }
})