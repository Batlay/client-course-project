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

  const navigate = useNavigate();
  const logout =() => {
      setIsAuth(false)
      setValue(null)
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
      navigate("/login");
  }
  
 let group = 0
  if (isAuth === true) {
     group = JSON.parse(localStorage.getItem('user')).groups
  } else {
     group = 0
  }
   
 
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       {/* <Navbar className="color-nav"collapseOnSelect expand="lg" variant="light"> */}
      <Container>
        <Navbar.Brand href="">NewWay</Navbar.Brand>
        {  !isAuth &&
           <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className='navb' to="/">Главная страница</Link>
          <Link className='navb' to="/about">О нас</Link>
          <Link className='navb' to="/contacts">Контакты</Link>
        </Nav>
        <Nav>
              <MyButton onClick={logout} style={{borderRadius: '5px'}}>Войти</MyButton>
          </Nav>
        </Navbar.Collapse>
        
}
          { group == 1 &&
           <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='navb' to="/tests">Тесты</Link>
          </Nav>
          <Nav>
              <MyButton onClick={logout} style={{borderRadius: '5px'}}>Выйти</MyButton>
          </Nav>
        </Navbar.Collapse>
          }
           { group == 2 &&
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='navb' to="/administator/schools">Управление школами</Link>
          </Nav>
          <Nav>
              <MyButton onClick={logout} style={{borderRadius: '5px'}}>Выйти</MyButton>
          </Nav>
        </Navbar.Collapse>
          }
          { group == 3 &&
           <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='navb' to="/pupils">Мой класс</Link>
            <Link className='navb' to="/notes">Заметки</Link>
            <Link className='navb' to="/about">О нас</Link>
            <Link className='navb' to="/contacts">Контакты</Link>
          </Nav>
          <Nav>
              <MyButton onClick={logout} style={{borderRadius: '5px'}}>Выйти</MyButton>
          </Nav>
        </Navbar.Collapse>
          }
          { group == 4 &&
           <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='navb' to="/schools">Cписок школ</Link>
          </Nav>
          <Nav>
              <MyButton onClick={logout} style={{borderRadius: '5px'}}>Выйти</MyButton>
          </Nav>
        </Navbar.Collapse>
          }
        
      </Container>
    </Navbar>
  )
}

export default NavbarPanel
