import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QR_blur from '../../assets/images/QR_blur.png';
import QR from '../../assets/images/QR.png';
import lock from '../../assets/images/lock.png';

export default function QRCode() {
    const [isLock, setIsLock] = useState(true);
    const navigation = useNavigation();

    function qrClickHandler() {
        setIsLock(!isLock);
    }

    function qrLongPressHandler() {
        if(!isLock){
            navigation.navigate('PayProcessing');
        }else{
            alert("잠금을 해제해 주세요.")
        }
        
    }

    return (
        <QRWrap
            activeOpacity={0.8}
            onPress={qrClickHandler}
            onLongPress={qrLongPressHandler}
            isLock={isLock}
        >
            <QRBackground
                source={isLock ? QR_blur : QR}
                isLock={isLock}
            >
                {isLock && (
                    <QRLockWrap>
                        <LockImg source={lock} />
                        <UnlockText>결제하기</UnlockText>
                    </QRLockWrap>
                )}
            </QRBackground>
        </QRWrap>
    );
}

const QRWrap = styled.TouchableOpacity`
  margin-top: 60px;
  justify-content: center;
  align-items: center;
  padding-bottom: ${(props) => (props.isLock ? '0' : '20px')};
`;

const QRBackground = styled(ImageBackground)`
  object-fit: contain;
  width: ${(props) => (props.isLock ? '190px' : '170px')};
  height: ${(props) => (props.isLock ? '190px' : '170px')};
  position: relative;
  top: ${(props) => (props.isLock ? '0px' : '11px')};
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 12px;
`;

const QRLockWrap = styled.View`
  width: 120px;
  height: 120px;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #FFF;
  background-color: rgba(255, 255, 255, 0.50);
  backdrop-filter: blur(4px);
`;

const LockImg = styled.Image`
  margin-bottom: 4px;
`;

const UnlockText = styled.Text`
  color: #303030;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.35px;
`;