import React from 'react';
import styled from 'styled-components/native';
import ex_profile from '../../assets/images/profile.png';

export default function Members({ members }) {
    return (
        <MainLayout>
            <ProfileContainer>
                <ProfileWrap>
                    {members.slice(0, 5).map((e, i) => (
                        <Profile key={i} source={ex_profile} index={i} />
                    ))}
                </ProfileWrap>

                {members.length > 5 && (
                    <MoreCount>+{members.length - 5}</MoreCount>
                )}
            </ProfileContainer>
        </MainLayout>
    );
}

const MainLayout = styled.View`
  margin-top: 32px;
  align-items: center;
  flex-direction: row;
`;

const ProfileContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
`;

const ProfileWrap = styled.View`
  flex-direction: row;
  background-color: #FFF;
  border: 1px solid #fff;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.04));
`;

const Profile = styled.Image`
  margin-left: ${(props) => (props.index === 0 ? '0px' : '-25px')};
  width: 50px; /* Adjust the width of each profile */
  height: 50px; /* Adjust the height of each profile */
  border-radius: 25px;
`;

const MoreCount = styled.Text`
  color: #3A4276;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.5px;
  position: absolute;
  right: -25px;
  top: 10px;
`;