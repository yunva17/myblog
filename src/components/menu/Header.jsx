import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { userId, isLogin, setIsLogin, setUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(userId);

  // 로그인 or 로그아웃
  const onLogin = () => {
    console.log(userId, isLogin);
    if (!isLogin) {
      navigate('/login');
    } else {
      localStorage.removeItem('userId');
      setUserId();
      setIsLogin(false);

      navigate('');
    }
  };

  return (
    <>
      <Navbar key='md' expand='md'>
        <Container>
          <Navbar.Brand href='/'>My Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement='end'
          >
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link onClick={() => navigate('/board')}>게시판</Nav.Link>
                <Nav.Link onClick={() => navigate('/board/create')}>
                  글쓰기
                </Nav.Link>
              </Nav>
              <Button variant='outline-primary' onClick={() => onLogin()}>
                {isLogin ? '로그아웃' : '로그인'}
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
