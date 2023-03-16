import React, {useState} from 'react'
import logo2 from '..//assets/logo2.png'
import {Close, MenuOutlined} from '@material-ui/icons';
import styled from "styled-components";

const Navbar = () => {

  const [active, setActive] = useState(false)

  const showMenu = () =>  {
    setActive(!active)
  }

  return (
    <Container>
    <><nav>
        <div className="navbar__left">
          <img className="brand" src={logo2} alt='logo' />
        </div>
        <div className={active ? 'slider active' : 'slider'} >
        <div className='closed'>
              <Close className='close' onClick={showMenu}/>
            </div>
          <ul>
            <li>
              <a href='#about'>.about()</a>
            </li>
            <li>
            <a href='#projects'>.projects()</a>
            </li>
            <li>
            <a href='/#experience'>.experience()</a>
            </li>
            <li>
            <a href='/#contact'>.contact()</a>
            </li>
          </ul>
        </div>
        <div className='menu-icon'>
      <MenuOutlined className='menu' onClick={showMenu}/>
    </div>
      </nav></>
      </Container>
  )
}



const Container = styled.div`
nav {
    padding: 2rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: var(--transition2);
}

.slider ul {
    display: flex;
    gap: 1.5rem;
    width: 100%;
    transition: 1s ease;
}

.slider ul li {
    margin-block: 1rem;
    list-style: none;
}

.slider ul li a{
    font-size: 1.2rem;
    text-decoration: none;
}

.menu-icon{
    display: none;
    align-items: left;
}

.menu-icon .menu{
    display: none;
    font-size: 2rem;
    cursor: pointer;
}

.closed .close {
    display: none;
    cursor: pointer;
    font-size: 2rem;
}
.brand {
    width: 3rem;
    height: 3rem;
}

@media screen and (max-width: 800px){
    .slider{
        padding: 2.8rem 0;
        position: fixed;
        min-width: 78%;
        height: 100vh;
        background-color: var(--color-primary);
        top: 0;
        right: -100%;
        z-index:2;
        transition: 1s ease;
    }
    ${'' /* blur body when active */}
    .slider.active{
        height: 100vh;
        min-height: 100%;
        top: 0;
        right: 0;
        transition: 1s ease;
        :root{
          -webkit-filter: blur(1px);
        }
    }

    .slider ul {
        padding-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .slider ul li {
        margin-block: 1rem;
        list-style: none;
    }
    .slider ul li a{
        font-size: 1.5rem;
        text-decoration: none;
        color: black;
    }
    .slider ul li a:hover{
          color: var(--color-light);
        }
    .menu-icon{
      
        display: block;
        align-items: right;
    }
    .menu-icon .menu{
      bottom: 1rem;
        display: block;
        font-size: 2rem;
        cursor: pointer;
    }
    .closed{
        display: flex;
        padding-right: 3rem;
        justify-content: end;
    }
    .closed .close {
        display: block;
        cursor: pointer;
        font-size: 2rem;
        color: black;
    }
 }
`;

export default Navbar