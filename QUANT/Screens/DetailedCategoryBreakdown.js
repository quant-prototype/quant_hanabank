import { ScrollView, View } from "react-native"
import BackComponent from "../Shared/Components/BackComponent";
import { StyleSheet } from "react-native";
import CategoryTitle from "../Entities/DetailedCategoryBreakdown/CategoryTitle";
import TransactionComponent from "../Shared/Components/TransactionComponent";
import { useState } from "react";

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

const processedData = dummyData.map((item) => ({
  title: item.date,
  data: item.transactions
}));

export default function DetailedCategoryBreakdown({navigation, route}) {
  const [transactionData, setTransactionData] = useState(processedData);

  const backPageHandler = () => {
    navigation.goBack();
  }

  const detailTransactionBreakdownHandler = (title,{data, date}) => {
    navigation.navigate("DetailedTransactionBreakdown", {title, data, date});
  }

  const title = route.params.title;
  const amount = route.params.amount;

  return (
    <View style={styles.screen}>
      <BackComponent backPageHandler={backPageHandler} />
      <CategoryTitle title={title} amount={amount}/>
      <TransactionComponent transactionData={transactionData} detailTransactionBreakdownHandler={detailTransactionBreakdownHandler} detailCategory="detailCategory" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7FB",
    paddingHorizontal: 20,
  }
})