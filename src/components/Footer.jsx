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
  
`;
export default Footer