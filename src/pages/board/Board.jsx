import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header, Pagination, PostPreview } from '../../components/index';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import thumbnailPhoto from '../../images/main_image.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 3% 0 0 13%;
`;

const BoardContainer = styled.div`
  width: 90%;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1%;
  width: 90%;
  justify-content: flex-end;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1%;
`;

const Board = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [boardList, setBoardList] = useState(boardData);

  // 페이지
  const [currentPage, setCurrentPage] = useState(1);
  let postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  //글쓰기
  const onPostAddButton = () => {
    navigate('create');
  };
  return (
    <>
      <Header />
      <Container>
        <ButtonContainer>
          <Button onClick={onPostAddButton}>작성하기</Button>
        </ButtonContainer>
        <BoardContainer>
          {boardList.map((item) => (
            <PostPreview post={item} />
          ))}
        </BoardContainer>
      </Container>
      <PageContainer>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={boardList.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </PageContainer>
    </>
  );
};

// 게시글 임시 데이터
const boardData = [
  {
    postId: 1,
    title: '안녕하세요',
    photo: [thumbnailPhoto],
    username: 'test1',
    createDate: '2024-01-20',
    contents: '만나서 반갑습니다',
  },
  {
    postId: 2,
    title: '프론트엔드',
    photo: [thumbnailPhoto],
    username: 'test1',
    createDate: '2024-01-20',
    contents:
      'React Hooks의 활용과 최신 업데이트: React Hooks를 사용한 상태 관리, 생명주기 관리, 커스텀 훅의 활용 최근 React 버전의 새로운 기능과 업데이트 타입스크립트(TypeScript) 적용하기: TypeScript를 사용한 프론트엔드 개발의 이점과 적용 방법 타입스크립트와 React의 효과적인 통합',
  },
];

export default Board;
