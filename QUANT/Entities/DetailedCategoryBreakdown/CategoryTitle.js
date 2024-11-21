import { StyleSheet, View, Text } from "react-native";
import ShoppingIcon from "../../assets/images/detailShopping.svg";
import PlaneIcon from "../../assets/images/detailFlight.svg";
import TransferIcon from "../../assets/images/detailTransfer.svg";
import FoodIcon from "../../assets/images/detailFood.svg";
import HealthIcon from "../../assets/images/detailHealth.svg";

export default function CategoryTitle({title, amount}) {
  const categoryAmount = amount.toLocaleString();
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.amountText}>{categoryAmount}원</Text>
      {title === "쇼핑" && <ShoppingIcon style={styles.detailIcon} />}
      {title === "이체" && <TransferIcon style={styles.detailIcon} />}
      {title === "음식" && <FoodIcon style={styles.detailIcon} />}
      {title === "의료ㆍ건강" && <HealthIcon style={styles.detailIcon} />}
      {title === "취미ㆍ여가" && <PlaneIcon style={styles.detailIcon} />}
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 24,
  },
  titleText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 40,
    fontStyle: "normal",
    lineHeight: 52,
    letterSpacing: -1
  },
  amountText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 20,
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: -0.5,
    marginTop: 8
  },
  detailIcon: {
    alignSelf: "flex-end",
    marginTop: 12,
  }
})