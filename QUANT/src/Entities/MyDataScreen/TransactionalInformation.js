import { FlatList, SectionList, StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DetectedDutchPayModal from "./DetectedDutchPayModal";
import DutchDetectedButton from "./DutchDetectedButton";
import TransactionComponent from "../../Shared/Components/TransactionComponent";

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

  return (
      <View>
        <TransactionComponent transactionData={transactionData} detailTransactionBreakdownHandler={detailTransactionBreakdownHandler} />
        <DutchDetectedButton />
        {isModal && <DetectedDutchPayModal isModal={isModal} setIsModal={setIsModal} dutchData={dutchData} />}
      </View>
  )
}

const styles = StyleSheet.create({
  // listContainer: {
  //   marginTop: 16,
  //   paddingBottom: 50,
  //   position: "relative",
  // },
})