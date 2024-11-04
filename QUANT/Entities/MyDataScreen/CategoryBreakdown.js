import { Pressable, StyleSheet, Text, View } from "react-native";
import IconContainer from "../../assets/images/iconContainer.svg";
import PlaneIcon from "../../assets/images/plane.svg";
import MoneyIcon from "../../assets/images/money.svg";
import FoodIcon from "../../assets/images/food.svg";
import HealthIcon from "../../assets/images/health.svg";
import ShoppingIcon from "../../assets/images/shopping.svg";
import ProgressBar from 'react-native-progress/Bar';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function CategoryBreakdown({item, totalAmount, color}) {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    setProgress(item.amount / totalAmount);
  }, [item.amount, totalAmount]);

  const goDetailBreakdownHandler = () => {
    navigation.navigate("DetailedCategoryBreakdown", {amount: item.amount, title: item.category});
  }

  return (
    <Pressable onPress={goDetailBreakdownHandler} android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.categoryBreakdownContainer, pressed && styles.pressedCategoryBreakdownContainer]}>
      <View style={styles.categoryBreakdownLeftContainer}>
        <View style={styles.iconContainer}>
          <IconContainer />
          {item.category === "쇼핑" && <ShoppingIcon style={styles.icon} />}
          {item.category === "이체" && <MoneyIcon style={styles.icon} />}
          {item.category === "음식" && <FoodIcon style={styles.icon} />}
          {item.category === "의료ㆍ건강" && <HealthIcon style={styles.icon} />}
          {item.category === "취미ㆍ여가" && <PlaneIcon style={styles.icon} />}
        </View>
        <View style={styles.categoryInfoContainer}>
          <Text style={styles.categoryText}>{item.category}</Text>
          <Text style={styles.categoryAmountText}>{item.amount.toLocaleString()}원</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar progress={progress} color={color} unfilledColor="#D9D9D9" style={styles.progressBar} animated={true} animationType="timing" animationConfig={{duration: 700}}/>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  categoryBreakdownContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  pressedCategoryBreakdownContainer: {
    opacity: 0.5
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16
  },
  icon: {
    position: "absolute"
  },
  categoryBreakdownLeftContainer: {
    flexDirection: "row",
    gap: 12,
  },
  categoryInfoContainer: {
    gap: 2,
    marginVertical: 12
  },
  categoryText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: -0.45
  },
  categoryAmountText: {
    color: "#767676",
    fontFamily: "Pretendard-400",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.35
  },
  progressBarContainer: {
    marginTop: 23,
  },
  progressBar: {
    borderWidth: 0,
    transform: [{scaleX: -1}]
  }
})