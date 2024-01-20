import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    color: #646363;
  }
`;

const Thumbnail = styled.img`
  width: 160px;
  height: 160px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  margin: 10px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 26px;
`;

const Contents = styled.span`
  margin-bottom: 10px;
`;

const Sub = styled.span`
  font-size: 14px;
`;

const PostPreview = ({ post }) => {
  const navigate = useNavigate();

  // 게시글로 이동
  const onClickBoard = (id) => {
    navigate(`${id}`, { state: { item: id } });
  };

  // 100자 이상 ..
  const truncate = (str) => {
    return str?.length > 100 ? str.substr(0, 100 - 1) + '...' : str;
  };

  return (
    <Container onClick={() => onClickBoard(post?.postId)}>
      <div style={{ display: 'flex' }}>
        <Thumbnail src={post?.photo[0]} />
        <TextContainer>
          <Title>{post?.title}</Title>
          <Contents>{truncate(post?.contents)}</Contents>
          <Sub>작성자: {post?.username}</Sub>
          <Sub>{post?.createDate}</Sub>
        </TextContainer>
      </div>
    </Container>
  );
};

export default PostPreview;
