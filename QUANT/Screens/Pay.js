import React, { useState } from 'react'
import styled from 'styled-components/native'
import Seletor from '../Entities/Pay/Selector'
import ToolBar from '../Entities/Pay/ToolBar'
import QRCode from '../Entities/Pay/QRCode'
import MemberInfo from '../Entities/Pay/MemberInfo'
import Members from '../Entities/Pay/Members'
import { BlurView } from 'expo-blur';
import { TouchableWithoutFeedback } from 'react-native'
import profile from '../assets/images/profile.png'
import { Image } from 'react-native'

export default function Pay() {

    const [isBtnClicked, setIsBtnClicked] = useState(true);

    function blurViewClickedHandler() {
        setIsBtnClicked(!isBtnClicked)
    }

    const members = ['권*남', '권*남', '권*남', '권*남', '권*남', '권*남', '권*남', '권*남']

    return (
        <MainLayout>
            <ToolBar title="Pay" />
            <Seletor />
            <QRCode />
            <MemberInfo count={members.length} />
            <Members members={members} blurViewClickedHandler={blurViewClickedHandler} />
            {isBtnClicked && (
                <TouchableWithoutFeedback onPress={blurViewClickedHandler}>
                    <StyledBlurView intensity={50} tint="light">
                        <MainTitle>총 정산 인원</MainTitle>
                        <SubTitle>{members.length}명</SubTitle>
                        {members.map((e, i) => (
                            <ProfileWrap key={i}>
                                <Image source={profile} />
                                <BlurText>{e}</BlurText>
                            </ProfileWrap>
                        ))}

                    </StyledBlurView>
                </TouchableWithoutFeedback>
            )}
        </MainLayout>
    )
}

const MainLayout = styled.View`
height: 100%;
background-color: white;
align-items : center;
`

const BlurViewWrap = styled.Pressable`

`

const StyledBlurView = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;


const MainTitle = styled.Text`
font-size: 20;
font-weight: 600;
margin-bottom: 10
`

const SubTitle = styled.Text`
font-size: 56;
font-weight: 500;
margin-bottom: 50
`

const ProfileWrap = styled.View`
flex-direction: row;
align-items: center;
gap: 20 
`

const BlurText = styled.Text`
  color: black;
  font-size: 28px;
  font-weight: 400;
  position: relative;
  top: -2
`;