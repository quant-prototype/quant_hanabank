import { Pressable, StyleSheet, Text, View } from "react-native";
import { G, Path, Svg } from "react-native-svg";
import * as d3 from 'd3-shape';
import LeftSkipArrow from "../../assets/images/smallLeftArrow.svg";
import RightSkipArrow from "../../assets/images/smallRightArrow.svg";
import { useState } from "react";
import PortfolioToTalAmountText from "./PortfolioTotalAmountText";

const dummyData = [
  {category: "여행", amount: 600000, color: "#22215B"},
  {category: "송금", amount: 90000, color: "#4CE364"},
  {category: "외식", amount: 220000, color: "#567DF4"},
  {category: "기타", amount: 90000, color: "#FFC700"}
]

export default function Portfolio() {
  const pieData = d3.pie().value(item => item.amount)(dummyData);
  const arcGenerator = d3.arc().innerRadius(40).outerRadius(100);
  const [totalAmount , setTotalAmount] = useState(10000000);
  const today = new Date();
  const month = today.getMonth()+1;

  return (
    <>
      <View style={styles.monthlyPieChartContainer}>
          <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.skipArrowButtonContainer, pressed && {opacity: 0.4}]}>
            <LeftSkipArrow />
          </Pressable>
          <View style={styles.pieChartContainer}>
            <Svg style={styles.pieChart}>
              <G x={100} y={100}>
                {pieData.map((data, index) => {
                  const path = arcGenerator(data);
                  return (
                    <Path key={index} d={path} fill={data.data.color} />
                  )
                })}
              </G>
            </Svg>
            <Text style={styles.monthText}>{month}월</Text>
          </View>
          <Pressable android_ripple={{color: "#ccc"}} style={({pressed}) => [styles.skipArrowButtonContainer, pressed && {opacity: 0.4}]}>
            <RightSkipArrow />
          </Pressable>
      </View>
      <PortfolioToTalAmountText totalAmount={totalAmount} />
    </>
  )
}

const styles = StyleSheet.create({
  monthlyPieChartContainer: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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
  }
})