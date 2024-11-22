import React, { useState } from 'react'
import styled from 'styled-components'
import { TouchableOpacity, Animated, Easing } from 'react-native';
import Header from '../Entities/Main/Header';
import TagHere from '../Entities/Main/TagHere';
import Menus from '../Entities/Main/Menus';
import wallet from '../assets/images/wallet.png'

export default function Main(){
    return(
        <MainLayout>
            <Header />
            <TagHere />
            <Menus />
            <WalletWrap>
                <Wallet source={wallet} />
            </WalletWrap>
            
        </MainLayout>
    )
}

const MainLayout = styled.SafeAreaView`
background-color: #F1F1F5;
flex: 1;
`

const WalletWrap = styled.View`
position: absolute;
bottom: 0px;
left: 9%;
flex-direction: row;
justify-content: center;

`
const Wallet = styled.Image`
`