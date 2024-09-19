import React, { useState } from 'react'
import styled from 'styled-components'
import Seletor from '../Entities/Pay/Selector'
import QRCODE from '../assets/images/QRCODE.png'
import ToolBar from '../Entities/Pay/ToolBar'

export default function Pay() {
    return (
        <MainLayout>
          <ToolBar title="Pay"/>
            <Seletor />
            <QRWrap>
                <QR source={QRCODE} />
            </QRWrap>
        </MainLayout>
    )
}

const MainLayout = styled.View`
height: 100%;
background-color: white;
align-items : center;
`

const QRWrap = styled.Pressable``

const QR = styled.Image`
width : 279.5px;
height : 279.5px
`