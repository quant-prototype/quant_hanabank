import { Dimensions, Keyboard, Pressable, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import BackComponent from "../Shared/Components/BackComponent";
import { useState } from "react";
import DetailedTransaction from "../Entities/DetailedTransactionBreakdownScreen/DetailedTransaction";

export default function DetailedTransactionBreakdownScreen({navigation, route}) {
  const [dutched, setDutched] = useState(true);

  const backPageHandler = () => {
    navigation.goBack();
  }

  const title = route.params.title;
  const data = route.params.data;
  const transactionDate = route.params.date;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.screen}>
      <BackComponent title={title} backPageHandler={backPageHandler} />
      <DetailedTransaction dutched={dutched} data={data} transactionDate={transactionDate} />
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20
  }
})