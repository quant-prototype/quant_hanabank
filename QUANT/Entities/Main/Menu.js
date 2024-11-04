import React from 'react';
import styled from 'styled-components/native';
import portfolio from '../../assets/images/portfolioIcon.png'
import transaction from '../../assets/images/transaction.png'
import go from '../../assets/images/goIcon.png'

export default function Menu({ type }) {
    return (
        <MainLayout>

            <Img source={type === 'portfolio' ? portfolio : transaction} />

        </MainLayout>
    );
}

const MainLayout = styled.View`
border-radius: 10px;
background-color: #F1F1F5;

`;

const IconWrap = styled.View`
flex-direction: row;
justify-content: end;
`;

const Icon = styled.Image`

`
const Img = styled.Image`

width: 164;
height: 200;
background-color: #F1F1F5;
`

