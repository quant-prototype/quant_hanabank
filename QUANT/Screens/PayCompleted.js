import React from 'react';
import styled from 'styled-components/native';
import MemberCell from '../Entities/PayProcessing/MemberCell';
import { useNavigation } from '@react-navigation/native';

export default function PayCompleted() {
    const members = ['권*남', '권*남', '권*남', '권*남', '권*남', '권*남', '권*남', '권*남'];
    const navigation = useNavigation();


    function btnClickHandler(){
        navigation.navigate('Main');
    }

    return (
        <MainLayout>
            <MainTitle>정산이{'\n'}완료되었어요.</MainTitle>
            <Price>총 금액: 100,000원</Price>

            {members.map((e, i) => (
                <MemberCell key={i} name={e} price="20000원" />
            ))}

            <CompleteButtonWrap>
                <CompleteButton onPress={btnClickHandler}>
                    <CompleteText>완료</CompleteText>
                </CompleteButton>
            </CompleteButtonWrap>
        </MainLayout>
    );
}

const MainLayout = styled.View`
  padding: 0px 20px;
`;

const MainTitle = styled.Text`
  font-size: 36px;
  font-weight: 600;
  margin-top: 110px;
  margin-bottom: 24px;
`;

const Price = styled.Text`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 32px;
`;

const CompleteButtonWrap = styled.View`
  width: 100%;
  padding: 0 20px;
  position: fixed;
  bottom: -65px;
`;

const CompleteButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #ffac30;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const CompleteText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;