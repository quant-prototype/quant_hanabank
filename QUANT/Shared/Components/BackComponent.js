import { SafeAreaView, Text, View } from "react-native";
import LeftArrowIcon from "../../assets/images/leftArrow.svg";

export default function BackComponent({title}) {
  return (
    <SafeAreaView>
      <View>
        <LeftArrowIcon />
        {title && <Text>{title}</Text>}
      </View>
    </SafeAreaView>
  )
}