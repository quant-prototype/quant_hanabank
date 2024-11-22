import React from 'react'
import styled from 'styled-components/native'


export default function MemberInfo({count}) {

  return (
    <MainLayout>
        <CountText>총 정산 인원</CountText>
        <Count>{count}명</Count>
    </MainLayout>
  )
}

const MainLayout = styled.View`
margin-top: 70;
justify-content: center;
align-items: center;
`

const CountText = styled.Text`
color: #212330;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: -0.35px;
margin-bottom: 4
`

const Count = styled.Text`
color: #212330;
text-align: center;
font-family: Pretendard;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 52px; /* 130% */
`