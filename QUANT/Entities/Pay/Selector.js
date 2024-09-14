import React, { useState } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native'; // Import Animated and Easing
import styled from 'styled-components/native';

export default function Selector() {
  const [isTimeZoneFocus, setIsTimeZoneFocus] = useState('1/N');
  const slideAnim = useState(new Animated.Value(0))[0];

  const timeZone = ['1/N', '먹은만큼'];

  const selectSwitch = (item) => {
    setIsTimeZoneFocus(item);

    const toValue = item === '1/N' ? 0 : 120;

    Animated.timing(slideAnim, {
      toValue,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  return (
    <MainLayout>
      <TimeZoneContainer>
        <AnimatedSelectedBackground style={{ transform: [{ translateX: slideAnim }] }} />
        {timeZone.map((item, index) => (
          <TimeZoneButton
            key={index}
            onPress={() => selectSwitch(item)}
            activeOpacity={1}
          >
            <TimeZoneText isFocused={isTimeZoneFocus === item}>
              {item}
            </TimeZoneText>
          </TimeZoneButton>
        ))}
      </TimeZoneContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  margin-top: 51px;
`;

const TimeZoneContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 56px;
  margin-bottom: 24px;
  border-radius: 100px;
  border: 1px solid #e5e5ec;
  background: #fff;
  position: relative;
`;

const AnimatedSelectedBackground = styled(Animated.View)`
  position: absolute;
  width: 110px;
  height: 48px;
  background-color: #ffac30;
  border-radius: 24px;
  top: 3px;
  left: 3px;
  z-index: 1;
`;

const TimeZoneButton = styled(TouchableOpacity)`
  width: 120px;
  height: 48px;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Ensure the text stays above the sliding background */
`;

const TimeZoneText = styled.Text`
  color: ${({ isFocused }) => (isFocused ? '#fff' : '#767676')};
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  font-family: Pretendard;
  line-height: 22px;
`;