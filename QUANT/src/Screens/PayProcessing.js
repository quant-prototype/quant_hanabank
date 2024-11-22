import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import MemberCell from '../Entities/PayProcessing/MemberCell'
import { useNavigation } from '@react-navigation/native'

export default function PayProcessing() {

    const members = ['권*남', '권*남', '권*남', '권*남', '권*남', '권*남', '권*남', '권*남']
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('PayCompleted');
        }, 2000);
    }, [])

    return (
        <MainLayout>
            <MainTitle>곧 정산이{'\n'}완료될 거에요.</MainTitle>
            <Price>총 금액: 100,000원</Price>

            {members.map((e,i)=>(
                <MemberCell key={i} name={e} price='20000원'/>
            ))}
        </MainLayout>
    )
}

const MainLayout = styled.View`
padding: 0px 20px; 
`

const MainTitle = styled.Text`
font-size: 36;
font-weight: 600;
margin-top: 110;
margin-bottom: 24;
`

const Price = styled.Text`
font-size: 20;
font-weight: 400;
margin-bottom: 32;
`