import React from 'react';
import styled from 'styled-components/native';
import down_arrow from '../../assets/images/down_arrow.png';
import Circle from '../../assets/images/Circle.png'
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TagHere() {
    const navigaton = useNavigation();
    function tagClickHandler(){
        navigaton.navigate('Pay')
    }

    return (
        <MainLayout>
            <InfoText>NFC를 태그해주세요.</InfoText>
            <DownArrow source={down_arrow} />
            <Pressable onPress={tagClickHandler}>
                <CircleImg source={Circle} />
            </Pressable>

        </MainLayout>
    );
}

const MainLayout = styled.View`
    justify-content: center;
    align-items: center;
`;

const InfoText = styled.Text`
    margin-top: 48px;
    color: #767676;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.35px;
`;

const DownArrow = styled.Image`
    margin-top: 6px;
    width: 64px;
    height: 20px;
    margin-bottom: 16px;
`;

const CircleImg = styled.Image`
margin-bottom: 70
`