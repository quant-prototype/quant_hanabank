import React from 'react';
import styled from 'styled-components/native';
import Menu from './Menu';

export default function Menus() {
    return (
        <MainLayout>
            <Menu type='transaction'/>
            <Menu type='portfolio'/>
        </MainLayout>
    );
}

const MainLayout = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
background-color: #F1F1F5;
`;
