import { Pressable, StyleSheet, Text, View } from "react-native";
import { G, Path, Svg } from "react-native-svg";
import * as d3 from 'd3-shape';
import LeftSkipArrow from "../../assets/images/smallLeftArrow.svg";
import RightSkipArrow from "../../assets/images/smallRightArrow.svg";
import { useEffect, useRef, useState } from "react";
import Animated, { Easing, useAnimatedProps, useSharedValue, withTiming, runOnUI } from "react-native-reanimated";
import PortfolioTotalAmountText from "./PortfolioTotalAmountText";
import CategoryBreakdown from "./CategoryBreakdown";

const dummyData = [
  {category: "쇼핑", amount: 600000},
  {category: "이체", amount: 90000},
  {category: "음식", amount: 220000},
  {category: "의료ㆍ건강", amount: 90000},
  {category: "취미ㆍ여가", amount: 250000}
]

const dummyColors = ["#84B6F4", "#95FAB9", "#A0D2F3", "#F4FAB4", "#F7CAE4"];

export default function Portfolio() {
  const pieData = d3.pie().value(item => item.amount)(dummyData);
  const arcGenerator = d3.arc().innerRadius(40).outerRadius(100);
  const [totalAmount , setTotalAmount] = useState(1250000);
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth()+1);

  const nextMonthHandler = () => {
    if(today.getMonth()+1>month && month<12) {
      setMonth((prevMonth) => prevMonth+1);
    }
  }

  const backMonthHandler = () => {
    if(month>1) {
      setMonth((prevMonth) => prevMonth-1);
    }
  }

  return (
    <>
      <View style={styles.monthlyPieChartContainer}>
          <Pressable onPress={backMonthHandler} android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.skipArrowButtonContainer, pressed && {opacity: 0.4}]}>
            <LeftSkipArrow />
          </Pressable>
          <View style={styles.pieChartContainer}>
            <Svg style={styles.pieChart}>
              <G x={100} y={100}>
                {pieData.map((data, index) => {
                  const path = arcGenerator(data);
                  return (
                    <Path key={index} d={path} fill={dummyColors[index]} />
                  );
                })}
              </G>
            </Svg>
            <Text style={styles.monthText}>{month}월</Text>
          </View>
          <Pressable onPress={nextMonthHandler} android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.skipArrowButtonContainer, pressed && {opacity: 0.4}]}>
            <RightSkipArrow />
          </Pressable>
      </View>
      <PortfolioTotalAmountText totalAmount={totalAmount} />
      <View style={styles.categoryBreakdownContainer}>
        {dummyData.map((item, index) => {
          return (
            <CategoryBreakdown item={item} key={index} totalAmount={totalAmount} color={dummyColors[index]} />
          )
        })}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  monthlyPieChartContainer: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pieChartContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  pieChart: {
    width: 200,
    height: 200,
  },
  monthText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
    position: "absolute",
  },
  skipArrowButtonContainer: {
    backgroundColor: "white",
    padding: 7.5,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryBreakdownContainer: {
    gap: 12,
    paddingBottom: 250,
  },
})