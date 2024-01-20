import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import PhotoUploader from '../../components/menu/board/PhotoUploader';
import { Button } from 'react-bootstrap';
import { Header } from '../../components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5% 20%;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 3%;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgfile, setImgfile] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  const navigate = useNavigate();

  // 게시글 등록
  const onPostAddButton = (event) => {
    event.preventDefault();

    const post = { title: title, content: content, imgSrc: imgSrc };

    navigate('/board', { state: post });
  };

  // 사진 삭제
  const deletePhoto = () => {
    setImgfile('');
    setImgSrc('');
  };

  return (
    <>
      <Header />
      <Container>
        <h2 style={{ fontWeight: 600 }}>글쓰기</h2>
        <form onSubmit={onPostAddButton} style={{ margin: 10 }}>
          <Form.Group>
            <Form.Label>제목</Form.Label>
            <Form.Control
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>이미지</Form.Label>
            <div style={{ display: 'flex' }}>
              <PhotoUploader setImgfile={setImgfile} setImgSrc={setImgSrc} />
              {imgSrc ? (
                <Button
                  type='button'
                  variant='danger'
                  onClick={deletePhoto}
                  style={{ marginLeft: '10px' }}
                >
                  삭제
                </Button>
              ) : (
                ''
              )}
            </div>

            {imgSrc ? <StyledImg src={imgSrc} alt='이미지' /> : ''}
          </Form.Group>
          <Form.Group>
            <Form.Label>본문</Form.Label>
            <Form.Control
              type='textarea'
              value={content}
              style={{ height: '100px' }}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
        </form>
        <ButtonContainer>
          <Button type='submit'>등록하기</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default PostCreate;
