import React from 'react'
import styled from "styled-components";

const About = () => {
  return (
    <Container>
    <about>
    <div id='about' className="container about__container">
      <h1>.about()</h1>
      <p>Hi there! My name is Dyana, and I'm a third-year Computer Science major at the 
      University of Texas at Arlington. Ever since I was young, I've been fascinated with 
      technology and the possibilities it holds. As I've progressed through my studies, I've 
      developed a particular interest in software engineering, where I can use my programming 
      skills to create innovative solutions to real-world problems. 
      <br></br>
      <br></br>
      In addition to my coursework, I've also built several projects, where I've had 
      the opportunity to work on putting my skills to the test. I'm proficient in several 
      programming languages, including Java, Python, and C++, and I'm always eager to learn more.
      <br></br>
      <br></br>
      Outside of my studies, I enjoy staying active by hiking and playing basketball, and I also 
      love to read and travel when I have the chance. Ultimately, my goal is to work as a 
      software engineer at a company where I can continue to learn and grow while making a
       meaningful impact through my work.
    </p>
      <br></br>
      <p> Here are a few technologies I am proficient in:</p>
      <br></br>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>C++</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Git</li>
        <li>Arduino</li>

      </ul>
      </div>
    </about>
    </Container>
  )
}

const Container = styled.div`

  about {
    height: auto;
    display: flex;
    overflow: hidden;
  }
  .about__container{
    padding: 5rem;
  }
  h1 {
    padding-bottom: 2.5rem;
    display: flex;
  }
  h1::after{
    content: '';
    display: block;
    margin-top: 1.8rem;
    margin-left: 2rem;
    height: 1px;
    width: 20rem;
    background-color: var(--color-primary);
  }
  p {
    color: var(--color-light);
  }
  li {
    color: var(--color-light);
  }
  li::before{
    content: "▹ ";
    color: var(--color-primary);
  }
  .skills-list{
    display: grid;
    grid-template-columns: repeat(4,150px);
  }

  @media screen and (max-width: 800px){
    .skills-list{
    grid-template-columns: repeat(3,150px);
  }}
  @media screen and (max-width: 620px){
    .skills-list{
    grid-template-columns: repeat(2,150px);
  }}
  @media screen and (max-width: 750px){
      .container{
     padding: 2rem 2.7rem;
    }}
  @media screen and (max-width: 420px){
      .container{
     padding: 2rem 1rem;
    }}
  `;


export default About