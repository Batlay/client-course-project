import React, { useContext } from 'react'
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';
import { useNavigate } from 'react-router-dom';


const NavbarPanel = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {value, setValue} = useContext(UserContext)
  // console.log(value)
  const navigate = useNavigate();
  const logout =() => {
      setIsAuth(false)
      setValue(null)
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
      navigate("/login");
  }
  
   const group = JSON.parse(localStorage.getItem('user')).groups
 
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">NewWay</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          { group == 1 &&
          <Nav className="me-auto">
            <Link className='navb' to="/tests">Тесты</Link>
            <Link className='navb' to="/about">О нас</Link>
          </Nav>
          }
           { group == 2 &&
          <Nav className="me-auto">
            <Link className='navb' to="/administator/schools">Управление школами</Link>
          </Nav>
          }
          { group == 3 &&
          <Nav className="me-auto">
            <Link className='navb' to="/pupils">Мой класс</Link>
            <Link className='navb' to="/notes">Заметки</Link>
            <Link className='navb' to="/about">О нас</Link>
          </Nav>
          }
          { group == 4 &&
          <Nav className="me-auto">
            <Link className='navb' to="/schools">Cписок школ</Link>
          </Nav>
          }
          <Nav>
              <MyButton onClick={logout}>Выйти</MyButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPanel
