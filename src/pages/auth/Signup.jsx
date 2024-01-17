import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6% 0 0 0;
  width: 100%;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  font-weight: 300;
  margin: 2% 0 0 2%;
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [idCheck, setIdCheck] = useState(false);
  const [nicknameCheck, setNicknameCheck] = useState(false);

  // blur
  const [idblur, setIdBlur] = useState(true);
  const [nicknameblur, setNicknameBlur] = useState(true);

  // 아이디, 비밀번호, 닉네임
  const { id, password, nickname } = watch();

  // 중복확인 오류 메세지
  const [idError, setIdError] = useState('');
  const [nickError, setNickError] = useState('');

  // 회원가입 전송
  const onSubmit = () => {
    // 회원가입 api 호출
  };

  // 아이디 중복확인
  const onCheckId = () => {
    if (id !== '') {
      // 아이디 중복확인 api 호출
    }
  };

  // 닉네임 중복확인
  const onCheckNickname = () => {
    if (nickname !== '') {
      // 닉네임 중복확인 api 호출
    }
  };

  return (
    <Container>
      <h1 style={{ fontWeight: 600, fontSize: '35px' }}>회원가입</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px' }}>
        <Form.Group>
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type='text'
            placeholder='아이디'
            {...register('id', {
              required: true,
              validate: () => idCheck === true,
              onBlur: () => {
                onCheckId();
                setIdBlur(true);
              },
            })}
            onFocus={() => {
              setIdBlur(false);
              setIdError('');
            }}
          />
        </Form.Group>
        {errors.id?.type === 'required' && (
          <ErrorMessage>아이디를 입력해주세요.</ErrorMessage>
        )}
        {errors.id?.type === 'validate' && idblur && (
          <ErrorMessage>{idError}</ErrorMessage>
        )}
        {!errors.id && idblur && id !== '' && id !== undefined && !idCheck && (
          <ErrorMessage>{idError}</ErrorMessage>
        )}
        <Form.Group>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            placeholder='비밀번호'
            type='password'
            {...register('password', { required: true })}
          />
        </Form.Group>
        {errors.password?.type === 'required' && (
          <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
        )}
        <Form.Group>
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
            placeholder='비밀번호 확인'
            type='password'
            {...register('checkpw', {
              required: true,
              validate: (value) => value === watch().password,
            })}
          />
        </Form.Group>
        {errors.checkpw?.type === 'required' && (
          <ErrorMessage>비밀번호를 한번 더 입력해주세요.</ErrorMessage>
        )}
        {errors.checkpw?.type === 'validate' && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
        <Form.Group>
          <Form.Label>닉네임</Form.Label>
          <Form.Control
            type='text'
            placeholder='닉네임'
            {...register('nickname', {
              required: true,
              validate: () => nicknameCheck === true,
              onBlur: () => {
                onCheckNickname();
                setNicknameBlur(true);
              },
            })}
            onFocus={() => {
              setNicknameBlur(false);
              setNickError('');
            }}
          />
        </Form.Group>
        {errors.nickname?.type === 'required' && (
          <ErrorMessage>닉네임을 입력해주세요.</ErrorMessage>
        )}
        {errors.nickname?.type === 'validate' && nicknameblur && (
          <ErrorMessage>{nickError}</ErrorMessage>
        )}
        {!errors.nickname &&
          !nicknameCheck &&
          nicknameblur &&
          nickname !== undefined &&
          nickname !== '' && <ErrorMessage>{nickError}</ErrorMessage>}
        <br />
        <Button
          as='input'
          type='submit'
          value='회원가입'
          style={{ width: '100%' }}
        />
      </form>
    </Container>
  );
};

export default Signup;
