import React from 'react'
import styled from "styled-components";


const Footer = () => {
  return (
    <Container>
      <footer>
        <div>
          Copyright © 2023 Dyana Rahhal All rights reserved
        </div>
      </footer>
    </Container>
  )
}

const Container = styled.div`
 
  footer{
    color: var(--color-light);
    padding: 2rem;
    text-align: center;
    font-size: .8rem;
  }
  @media screen and (max-width: 420px){
      footer{
     padding: 2rem 1rem;
     font-size: .7rem
    }}
  
`;
export default Footer