import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import profile from '../../assets/images/profile.png'

export default function MemberCell({ name, price }) {

    return (
        <MainLayout>
            <ProfileWrap>
            <ProfileImg source={profile}/>
            <Name>{name}</Name>
            </ProfileWrap>
            
            <Price>{price}</Price>
        </MainLayout>
    )
}

const MainLayout = styled.View`
padding: 0px 20px; 
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
`

const ProfileWrap = styled.View`
flex-direction: row;
gap: 10
`

const ProfileImg = styled.Image`
width: 28;
height: 28;
position: relative;
top: -3
`

const Name = styled.Text`
font-size: 16;
font-weight: 600;
margin-bottom: 32;
`

const Price = styled.Text`
font-size: 16;
font-weight: 600;
margin-bottom: 32;
`