import { ScrollView, View } from "react-native"
import BackComponent from "../Shared/Components/BackComponent";
import { StyleSheet } from "react-native";
import CategoryTitle from "../Entities/DetailedCategoryBreakdown/CategoryTitle";
import TransactionalInformation from "../Entities/MyDataScreen/TransactionalInformation";

export default function DetailedCategoryBreakdown({navigation, route}) {
  const backPageHandler = () => {
    navigation.goBack();
  }

  const title = route.params.title;
  const amount = route.params.amount;

  return (
    <ScrollView style={styles.screen}>
      <BackComponent backPageHandler={backPageHandler} />
      <CategoryTitle title={title} amount={amount}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F7FB",
    paddingHorizontal: 20,
  }
})