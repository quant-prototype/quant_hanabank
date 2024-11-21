import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import CloseIcon from "../../assets/images/close.svg";
import CheckBoxIcon from "../../assets/images/checkBox.svg";
import SelectedCheckBoxIcon from "../../assets/images/selectedCheckBox.svg";
import { useState } from "react";
import BottomButton from "../../Shared/Components/BottomButton";

export default function DetectedDutchPayModal({isModal, setIsModal, dutchData}) {
  const [selectedCheckBox, setSelectedCheckBox] = useState([]);

  const toggleCheckBoxHandler = (newDutchData) => {
    setSelectedCheckBox((prev) => {
      const selectedData = [...prev];
      if(selectedData.includes(newDutchData)) {
        return selectedData.filter((i) => i!== newDutchData);
      } else {
        return [...selectedData, newDutchData]
      }
    })
  }

  const closeModalHandler = () => {
    setIsModal(false);
  }

  const confirmButtonHandler = () => {
    selectedCheckBox.length > 0 && setIsModal(false);
  }

  return (
    <Modal visible={isModal} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.titleText}>더치페이가</Text>
              <Text style={styles.titleText}>맞나요?</Text>
            </View>
            <Pressable onPress={closeModalHandler}><CloseIcon /></Pressable>
          </View>
          <View style={styles.dutchDataContainer}>
            {dutchData.map((item,index) => {
              const isSelected = selectedCheckBox.includes(item);
              return (
                <View key={index} style={styles.dutchDataContentContainer}>
                  <View style={styles.dateAndTimeContainer}>
                    <Text style={styles.dateText}>{item.date}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                  </View>
                  <View style={styles.mainContentContainer}>
                    <Text style={styles.mainContentText}>{item.name}</Text>
                    <View style={styles.mainContentContainerRightContainer}>
                      <Text style={styles.mainContentText}>{item.amount.toLocaleString()}원</Text>
                      <Pressable android_ripple={{color: "ccc"}} style={({pressed}) => pressed && {opacity: 0.5}} onPress={()=>toggleCheckBoxHandler(item)}>{isSelected ? <SelectedCheckBoxIcon /> : <CheckBoxIcon />}</Pressable>
                    </View>
                  </View>
                </View>
              )
            })}
          </View>
          <View style={{marginTop: 48}}>
            <BottomButton text="맞아요" handler={confirmButtonHandler} selected={selectedCheckBox} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 54,
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  titleContainer: {
    flexDirection: 'row',
    // alignItems: "center",
    justifyContent: "space-between"
  },
  titleText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 32,
    fontStyle: "normal",
    lineHeight: 42,
    letterSpacing: -0.8
  },
  dutchDataContainer: {
    marginTop: 32,
    gap: 20
  },
  dutchDataContentContainer: {
    gap: 8,
  },
  dateAndTimeContainer: {
    flexDirection: "row",
    gap: 6
  },
  dateText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-400",
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 18
  },
  timeText: {
    color: "#767676",
    fontFamily: "Pretendard-400",
    fontSize: 12,
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: -0.3
  },
  mainContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  mainContentText: {
    color: "#1B1D28",
    fontFamily: "Pretendard-600",
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 26,
    letterSpacing: -0.45
  },
  mainContentContainerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  }
})