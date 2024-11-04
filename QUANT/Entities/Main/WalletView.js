import React, { useState } from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, View } from 'react-native';
import Cards from '../WalletView/Cards';

export default function WalletView({ backgroundClickHandler, cards, setCards }) {

  return (
    <TouchableWithoutFeedback onPress={backgroundClickHandler}>
      <MainLayout>
        <Instruction>정산할 계좌 및 카드를 선택하세요</Instruction>

        <SelectedCardWrap>
          <SelectedCard source={cards[0].img} />
        </SelectedCardWrap>

        <CardInfoWrap>
          <Card>{cards[0].name}</Card>
          <CardNum>{cards[0].num}</CardNum>
        </CardInfoWrap>

        <SelectButtonWrap onPress={backgroundClickHandler}>
          <SelectButton>선택완료</SelectButton>
        </SelectButtonWrap>

        <Cards cards={cards} setCards={setCards}/>
      </MainLayout>
    </TouchableWithoutFeedback>
  );
}

const MainLayout = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 9;
  justify-content: center;
  align-items: center;
  padding: 38px;
`;

const Instruction = styled.Text`
  color: #C2C2C2;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  margin-bottom: 40px;
`;

const SelectedCardWrap = styled.View``;

const SelectedCard = styled.Image`
  width: 300px;
  height: 190px;
  resize-mode: contain;
`;

const CardInfoWrap = styled.View``;

const Card = styled.Text`
  color: #FFF;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 8px;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.45px;
`;

const CardNum = styled.Text`
  color: #FFF;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const SelectButtonWrap = styled.Pressable`
  border-radius: 100px;
  border: 1px solid #FFF;
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(10px);
  padding: 14px 30px;
  margin-top: 32px;
`;

const SelectButton = styled.Text`
  color: white;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.35px;
`;