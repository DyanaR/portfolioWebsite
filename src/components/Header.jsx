import React from 'react'
import styled from "styled-components";
import background from '..//assets/background.png'
import Resume2 from '..//assets/Resume2.pdf'


const Header = () => {
  return (
    <Container>
    <header>
      <div className='container header__container'>
      <div className='right'>
        {/* <h4 className='intro'>Hi, my name is</h4> */}
        <h1>Dyana Rahhal</h1>
        <h2>Full-Stack Developer</h2>
        <h4 className='text-light'>I enjoy transforming concepts into reality through digital experiences.</h4>
        <a href={Resume2} target='_blank' rel="noreferrer" className="Resume"><button className='btn'>Resume</button> </a>
        </div>
        <div className='left'>
         <img className='background' src={background} alt='background'/>
         </div>
      </div>  
    </header>
    </Container>
  )
}

export default Header

const Container = styled.div`
  header {
    height:auto;
    display: flex;
    overflow: hidden;
  }
  a {
    width: 1rem;
  }
  h1 {
    font-size: 4rem;
    line-height: normal;
  }
  h2 { 
    font-size: 2rem;
    color: var(--color-primary);
  }
  h4 {
    max-width: 35rem;
    display: block;
  }
  .btn {
    margin-top: 1rem;
  }
  .header__container{
    padding: 5rem;
    display: flex;
    height: 100%;
    position: relative;
    justify-content: space-between;
  }
  .left{
    padding-left: 2rem;
  }
  .background {
    height: 18rem;
    width: 28rem;
  }

  @media screen and (min-width: 1650px){ 
    .background {
    height: 25rem;
    width: 35rem;
  }}
  @media screen and (max-width: 1150px){
    .left{
      display: none;
    }
    h4 {
      ${'' /* max-width: 60rem; */}
    }}

  @media screen and (max-width: 1438px){
     h1 {
     font-size: 3.5rem;
     min-width: 28rem;
     }
     h2{
      font-size: 1.7rem;
    }}

  @media screen and (max-width: 620px){
      .header__container{
     padding: 2rem 2.7rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2{
      font-size: 1.5rem;
    }
    h4{
      max-width: 22rem;
    }}

  @media screen and (max-width: 420px){
      .header__container{
     padding: 2rem 1rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2{
      font-size: 1.5rem;
    }}
`;
