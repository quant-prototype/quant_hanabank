import React, { useEffect, useState } from 'react';
import { Animated, LayoutAnimation, Platform, UIManager } from 'react-native';
import styled from 'styled-components/native';
import MemberCell from '../Entities/PayProcessing/MemberCell';
import { useNavigation } from '@react-navigation/native';

export default function PayProcessing() {
  const members = ['권*남', '김*수', '박*영', '이*민', '최*준', '장*희', '정*아', '오*석'];
  const navigation = useNavigation();

  const [displayedMembers, setDisplayedMembers] = useState([]);
  const [animations, setAnimations] = useState([]);

  // LayoutAnimation 활성화 (Android의 경우 필요)
  useEffect(() => {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    let memberIndex = 0;

    const interval = setInterval(() => {
      if (memberIndex < members.length && isMounted) {
        // 레이아웃 애니메이션 시작 (리스트 전체 애니메이션)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        // 새로운 멤버의 애니메이션 값 생성
        const newAnimation = new Animated.Value(100); // 오른쪽 밖에서 시작

        // 새로운 멤버 추가
        setDisplayedMembers((prev) => [members[memberIndex], ...prev]);

        // 새로운 멤버의 슬라이드 애니메이션 시작
        setAnimations((prev) => [newAnimation, ...prev]);
        Animated.timing(newAnimation, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();

        memberIndex++;
      } else {
        clearInterval(interval);
        // 모든 멤버가 표시된 후 화면 이동
        setTimeout(() => {
          navigation.navigate('PayCompleted');
        }, 1000);
      }
    }, 350); // 멤버 추가 간격 조정

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <MainLayout>
      <MainTitle>곧 정산이{'\n'}완료될 거에요.</MainTitle>
      <Price>총 금액: 100,000원</Price>

      <ListContainer>
        {displayedMembers.map((member, index) => (
          <AnimatedMemberCell
            key={index}
            style={{
              transform: [{ translateX: animations[index] || 0 }],
            }}
          >
            <MemberCell name={member} price="20,000원" />
          </AnimatedMemberCell>
        ))}
      </ListContainer>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  padding: 0px 20px;
`;

const MainTitle = styled.Text`
  font-size: 36px;
  fontFamily: "Pretendard-600";
  margin-top: 110px;
  margin-bottom: 24px;
`;

const Price = styled.Text`
  font-size: 20px;
  fontFamily: "Pretendard-400";
  margin-bottom: 32px;
`;

const ListContainer = styled.View`
  width: 100%;
`;

const AnimatedMemberCell = styled(Animated.View)`
  width: 100%;
  margin-bottom: 10px;
`;