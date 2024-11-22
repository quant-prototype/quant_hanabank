import { Image, Text, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import CloseIcon from "../../assets/images/close.svg";
import { useNavigation } from "@react-navigation/native";

export default function CloseComponent() {
  const navigation = useNavigation();
  const clickButton = () => {
    navigation.navigate("pay");
  }
  return (
    <SafeAreaView>
      <View style={styles.closeContainer}>
        <Pressable style={styles.test} >
          <CloseIcon />
        </Pressable>

        {/* <Pressable onPress={clickButton}>
          <Text>결제하러가기</Text>
        </Pressable> */}
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  closeContainer: {
    paddingVertical: 14,
    alignItems: "flex-end",
  },
})