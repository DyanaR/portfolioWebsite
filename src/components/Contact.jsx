import React from 'react'
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <contact id='contact'>
        <div className='container contact__container'>
          <h1>Get In Touch</h1>
          <h4>I am open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h4>
          <a href="mailto: dyanarahhal98@gmail.com" className="Resume">
            <button className='btn'>Say Hello</button> 
          </a>
        </div>
      </contact>
    </Container>
    )
  }

const Container = styled.div`
  contact {
    height: auto;
    display: flex;
    overflow: hidden;
  }
  .container{
    padding: 5rem;
    text-align: center;
  }
  h1{
    padding-bottom: 2rem;
    font-size: 3rem;
    
  }
  h4 {
    color: var(--color-light);
  }
  .btn {
    margin-top: 2rem;
  }
  @media screen  and (max-width: 500px){
    h1{
      font-size: 1.7rem;
      padding-bottom: 1.2rem;
    }
  }
  @media screen and (max-width: 750px){
      .container{
     padding: 2rem 2.7rem;
    }}
  @media screen and (max-width: 420px){
      .container{
     padding: 2rem 1rem;
    }}
`;

export default Contact