import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 100%;
  width: 350px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  height: 100%;
  margin: 10% 0 3% 0;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;

const SignupContainer = styled.div`
  font-size: 17px;
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 1% 0 0 20px;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
  font-weight: 400;
  margin: 2% 0 0 2%;
`;

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 임시 아이디 : test1, 비밀번호: test1234

  // 로그인 로직(임시)
  const getLogin = (id, password) => {
    if (id === 'test1' && password === 'test1234') {
      return true;
    } else return false;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (id !== '' && password !== '') {
      // 로그인 api 호출
      setError('');

      if (getLogin(id, password)) {
        // 로그인 성공 -> 메인 페이지로 이동
        setId('');
        setPassword('');
      } else {
        setError('아이디나 비밀번호를 확인해주세요.');
      }
    } else if (id === '') {
      setError('아이디를 입력해주세요.');
    } else if (password === '') {
      setError('비밀번호를 입력해주세요.');
    }
  };
  return (
    <Container>
      <TitleContainer>
        <h1 style={{ fontWeight: 600, fontSize: '50px' }}>MyBlog</h1>
      </TitleContainer>
      <LoginContainer onSubmit={onSubmit}>
        <Form.Control
          name='id'
          type='text'
          placeholder='아이디'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <Form.Control
          name='password'
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorMessage>{error}</ErrorMessage>
        <br />

        <Button
          as='input'
          type='submit'
          value='회원가입'
          style={{ width: '100%' }}
        />
      </LoginContainer>
      <SignupContainer>
        회원이 아니신가요? <StyledLink to='/signup'>회원가입</StyledLink>
      </SignupContainer>
    </Container>
  );
};

export default Login;
