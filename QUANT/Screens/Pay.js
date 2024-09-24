import React, { useState } from 'react'
import styled from 'styled-components'
import Seletor from '../Entities/Pay/Selector'
import ToolBar from '../Entities/Pay/ToolBar'
import QRCode from '../Entities/Pay/QRCode'
import MemberInfo from '../Entities/Pay/MemberInfo'
import Members from '../Entities/Pay/Members'

export default function Pay() {

    const members = ['a','b', 'c', 'd', 'e','e','a','b']

    return (
        <MainLayout>
          <ToolBar title="Pay"/>
            <Seletor />
            <QRCode />
            <MemberInfo count={members.length} />
            <Members members={members}/>
        </MainLayout>
    )
}

const MainLayout = styled.View`
height: 100%;
background-color: white;
align-items : center;
`