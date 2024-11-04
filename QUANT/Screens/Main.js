import React, { useState } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Header from '../Entities/Main/Header';
import TagHere from '../Entities/Main/TagHere';
import Menus from '../Entities/Main/Menus';
import wallet from '../assets/images/wallet.png';
import WalletView from '../Entities/Main/WalletView';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';

export default function Main() {
      const [cards, setCards] = useState([
      {
        name: '하나은행',
        num: '123456-78-12345665',
        img: card1,
      },
      {
        name: '하나은행',
        num: '938247-38-384021',
        img: card2,
      },
      {
        name: '하나은행',
        num: '394829-86-83674993',
        img: card3,
      },
      {
        name: '하나은행',
        num: '385673-22-83764923',
        img: card4,
      }
    ]);

    const [isWalletClicked, setIsWalletClicked] = useState(false);

    function backgroundClickHandler() {
        setIsWalletClicked(false)
    }

    return (
        <MainWrap>
            <MainLayout>
                <Header />
                <TagHere />
                <Menus />
                <WalletWrap>
                    <TouchableOpacity onPress={() => setIsWalletClicked(true)}>
                        <Wallet source={wallet} />
                    </TouchableOpacity>
                </WalletWrap>


            </MainLayout>

            {
                isWalletClicked && (
                    <WalletView
                    backgroundClickHandler={backgroundClickHandler}
                    cards={cards}
                    setCards={setCards}
                    />
                )
            }

        </MainWrap>
    );
}

const MainWrap = styled.View`
flex:1
`

const MainLayout = styled.SafeAreaView`
  background-color: #f1f1f5;
  flex: 1;
  position: relative;
`;

const WalletWrap = styled.View`
  position: absolute;
  bottom: 0px;
  left: 10%;
  flex-direction: row;
  justify-content: center;
`;

const Wallet = styled.Image``;