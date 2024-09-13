import React from 'react'
import styled from 'styled-components/native'
import BACK from '../../assets/images/back.png'
import { useNavigation } from "@react-navigation/native";
import {View} from "react-native"
import LOGO from '../../assets/images/logo.png'
export default function ToolBar({title}) {
  const navigation = useNavigation();
  
  const handleCloseButtonClick = () => {
    navigation.navigate("MyData");
  }

  return (
    <MainLayout>

       {/* Close 버튼 */}
       <CloseButtonWrapper onPress={handleCloseButtonClick} >
        <CloseButton source={BACK} />
      </CloseButtonWrapper>

      {/* 상단바 제목 */}
      <TitleSection>
        <Logo source={LOGO}/>
        <StyledText>{title}</StyledText>
      </TitleSection>
      

      {/* Close 버튼 */}
      <CloseButtonWrapper onPress={handleCloseButtonClick} opacity="0">
        <CloseButton source={BACK} />
      </CloseButtonWrapper>

    </MainLayout>
  )
}

const MainLayout = styled.View`
  width: 100%;
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
  z-index: 10;
  padding: 12px 20px;
`;

const Logo = styled.Image`
width : 28px;
height : 28px;
`;

const TitleSection = styled.View`
width : 88px;
height : 34px;
background-color : #FFAC30;
border-radius: 100px;
flex-direction : row;
align-items : center;
justify-content : space-evenly;
padding : 3px 12px 3px 12px;
position : relative;
top : 2px;
`;

const StyledText = styled.Text`
color: #FFF;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 26px
`;

const CloseButtonWrapper = styled.TouchableOpacity`
opacity : ${({ opacity }) => opacity || '1'};

`;

const CloseButton = styled.Image`
  width: 28px;
  height: 28px;
  margin-right : 24px;
`;
