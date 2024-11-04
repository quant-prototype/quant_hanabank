import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

export default function Cards({ cards, setCards }) {

    function changeCard(n) {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            switch (n) {
                case 1:
                    [newCards[0], newCards[1]] = [newCards[1], newCards[0]];
                    break;
                case 2:
                    
                    [newCards[0], newCards[2]] = [newCards[2], newCards[0]];
                    break;
                case 3:
                    
                    [newCards[0], newCards[3]] = [newCards[3], newCards[0]];
                    break;
                default:
                    break;
            }
            return newCards;
        });
    }

    return (
        <MainLayout>
            <FirstWrap onPress={()=>changeCard(1)}>
                <First source={cards[1].img} />
            </FirstWrap>

            <SecondWrap onPress={()=>changeCard(2)}>
                <Second source={cards[2].img} />
            </SecondWrap>

            <ThirdWrap onPress={()=>changeCard(3)}>
                <Third source={cards[3].img} />
            </ThirdWrap>

        </MainLayout>
    )
}

const MainLayout = styled.View`
margin-top: 68px;
position: relative;
background-color: white;
align-items : center;

`
const FirstWrap = styled.TouchableOpacity`
position: absolute;
top: 0px;
pointer: cursor;
`
const First = styled.Image`
width: 300px;
height: 190px;
resize-mode: contain;
`

const SecondWrap = styled.TouchableOpacity`
position: absolute;
top: 48px;
pointer: cursor;
`
const Second = styled.Image`
width: 300px;
height: 190px;
resize-mode: contain;
`
const ThirdWrap = styled.TouchableOpacity`
position: absolute;
top: 96px;
pointer: cursor;
`
const Third = styled.Image`
width: 300px;
height: 190px;
resize-mode: contain;
`