import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mainImage from '../../images/main_image2.png';
import Header from '../../components/menu/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 3% 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17% 0 3% 20%;
  width: fit-content;
`;

const MainText = styled.span`
  font-size: 43px;
  font-weight: 700;
`;

const PurpleContainer = styled.div`
  width: 350px;
  height: 600px;
  background: #d8bbf5;
  border-radius: 0px 0px 0px 30px;
  position: absolute;
  right: 0;
  z-index: -999;
`;

const StyledImg = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  right: 20%;
  top: 25%;
  z-index: 89;
`;

const Main = () => {
  // 로그인 여부
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container>
      <Header isLogin={isLogin} />
      <TextContainer>
        <MainText>
          당신의 일상을
          <br /> 함께 나눠보세요<span>, My Blog</span>.
        </MainText>
      </TextContainer>
      <PurpleContainer />
      <StyledImg alt='main' src={mainImage} />
    </Container>
  );
};

export default Main;
