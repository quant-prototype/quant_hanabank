import { Image, Pressable, SafeAreaView, View } from "react-native";
import CloseIcon from "../../assets/images/close.svg";

export default function CloseComponent() {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
          <CloseIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}