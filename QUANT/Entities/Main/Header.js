import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, Image } from 'react-native';
import MainLogo from '../../assets/images/MainLogo.png';

export default function Header() {
    return (

        <MainLayout>
            <Logo source={MainLogo} />
        </MainLayout>

    );
}

const MainLayout = styled.View`
flex-direction: row;
padding: 8px 20px;
`

const Logo = styled.Image`
  width: 105px;
  height: 40px;
`;