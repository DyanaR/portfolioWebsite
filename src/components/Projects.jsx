import React from 'react'
import styled from "styled-components";
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi'
import gyrostogo from '..//assets/gyrostogo.png'
import foodRecipesAPI from '..//assets/foodRecipesAPI.png'
import netflixClone from '..//assets/netflixClone.png'
import toDoList from '..//assets/toDoList.png'
// import projectsList from '..//assets/projectsList.js'


const Projects = () => {
  return (
    <Container>
      <projects>
      <div id='projects' className='container projects__container'>
        <h1>.projects()</h1>

      {/* Project 1 */}
        <ul>
          <li className='projectBox'>
            <div className='projectContent'>
              <div>
                <h4 className='projectOverline'>Featured Project</h4>
                <h3 className='projectTitle'> 
                <a  href='https://gyrostogo.onrender.com/ ' target='_blank' rel="noreferrer">Resturant Website</a>
                </h3>
                <div className='projectDescription'>
                  <h4 className='desc'>Modernized an existing website for a local restaurant. I 
                  built the website using HTML, Bootstrap, CSS, and JavaScript, and 
                  incorporated Node.JS and Express for the contact form on the 
                  careers page.</h4>
                </div>
                <ul className='projectTechList'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
                <div className='projectLinks'>
                  <a href='https://github.com/DyanaR/GyrosToGoResturantWesbite/blob/main/gyrostogo.png' target='_blank' rel="noreferrer"><FiGithub/></a>
                  <a href='https://gyrostogo.onrender.com/' target='_blank' rel="noreferrer"><FiExternalLink/></a>
                </div>
              </div>
            </div>
            <div className='projectImage'>
              <a className='aImg' href='https://gyrostogo.onrender.com/' target='_blank' rel="noreferrer">
                <div className='imgageWrapper'>
                  <img src={gyrostogo} alt='gyrostogo'></img>
                </div>
              </a>
            </div>
          </li>
        </ul>

        {/* Project 2 */}
        <ul>
          <li className='projectBox'>
            <div className='projectContentFlipped'>
              <div>
                <h4 className='projectOverline'>Featured Project</h4>
                <h3 className='projectTitle'> 
                <a  href='https://foodrecipes-9yzh.onrender.com/' target='_blank' rel="noreferrer">Netflix Clone</a>
                </h3>
                <div className='projectDescription'>
                <h4 className='desc'> A Netflix clone built on React.js which uses firebase for authentication. For 
                backend routing I used Express and the database is managed using MongoDB.
                  </h4>                
                  </div>
                <ul className='projectTechListFlipped'>
                  <li>React</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>Redux Toolkit</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
                <div className='projectLinksFlipped'>
                  <a href='https://github.com/DyanaR/NetflixClone' target='_blank' rel="noreferrer"><FiGithub/></a>
                </div>
              </div>
            </div>
            <div className='projectImageFlipped'>
              <a className='aImg' href='https://github.com/DyanaR/NetflixClone' target='_blank' rel="noreferrer">
                <div className='imgageWrapper'>
                  <img src={netflixClone} alt='netflixClone'></img>
                </div>
              </a>
            </div>
          </li>
        </ul>

        {/* Project 3 */}
        <ul>
          <li className='projectBox'>
            <div className='projectContent'>
              <div>
                <h4 className='projectOverline'>Featured Project</h4>
                <h3 className='projectTitle'> 
                <a  href='https://gyrostogo.onrender.com/' target='_blank' rel="noreferrer">To Do List</a>
                </h3>
                <div className='projectDescription'>
                  <h4 className='desc'>I created a webapp for managing tasks, with 
                  the goal of learning how to deploy fully managed MongoDB across 
                  Render using MongoDB Atlas instead of local hosting.
                  </h4>
                </div>
                <ul className='projectTechList'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>MongoDB Atlas</li>
                  <li>Node.js</li>
                  <li>EJS</li>
                </ul>
                <div className='projectLinks'>
                  <a href='https://github.com/DyanaR/GyrosToGoResturantWesbite/blob/main/gyrostogo.png' target='_blank' rel="noreferrer"><FiGithub/></a>
                  <a href='https://gyrostogo.onrender.com/' target='_blank' rel="noreferrer"><FiExternalLink/></a>
                </div>
              </div>
            </div>
            <div className='projectImage'>
              <a className='aImg' href='https://gyrostogo.onrender.com/' target='_blank' rel="noreferrer">
                <div className='imgageWrapper'>
                  <img src={toDoList} alt='todolist'></img>
                </div>
              </a>
            </div>
          </li>
        </ul>

        {/* Project 4 */}
        <ul>
          <li className='projectBox'>
            <div className='projectContentFlipped'>
              <div>
                <h4 className='projectOverline'>Featured Project</h4>
                <h3 className='projectTitle'> 
                <a  href='https://foodrecipes-9yzh.onrender.com/' target='_blank' rel="noreferrer">Food Recipes API</a>
                </h3>
                <div className='projectDescription'>
                <h4 className='desc'>I created this website using HTML and CSS that searches 
                  for meals based on specific ingredients. It utilizes API from 
                  themealdb and Vanilla JavaScript to generate recipes based on user input.
                  </h4>                
                  </div>
                <ul className='projectTechListFlipped'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>API</li>
                </ul>
                <div className='projectLinksFlipped'>
                  <a href='https://github.com/DyanaR/FoodRecipesAPI' target='_blank' rel="noreferrer"><FiGithub/></a>
                  <a href='https://foodrecipes-9yzh.onrender.com/' target='_blank' rel="noreferrer"><FiExternalLink/></a>
                </div>
              </div>
            </div>
            <div className='projectImageFlipped'>
              <a className='aImg' href='https://foodrecipes-9yzh.onrender.com/' target='_blank' rel="noreferrer">
                <div className='imgageWrapper'>
                  <img src={foodRecipesAPI} alt='foodRecipesAPI'></img>
                </div>
              </a>
            </div>
          </li>
        </ul>
        </div>
      </projects>
  </Container>
  )
}

export default Projects;

const Container = styled.div`
  projects {
    height: auto;
    display: flex;
    overflow: hidden;
  }
  .container{
    padding: 5rem;
   }
   h1{
    display: flex;
    padding-bottom: 2.5rem;
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
  .projectOverline{
    color: var(--color-primary);
  }
  .projectBox{
    position: relative;
    display: grid;
    gap: .7rem;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 4rem;
  }
  .projectContentFlipped{
    grid-column: 1 / 9;
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
  }
  .projectContent{
    text-align: right;
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
    grid-column: 7 / -1;
  }
  .projectDescription{
    position: relative;
    padding: 1.5rem;
    z-index: 2;
    border-radius: 4px;
    background-color: var(--color-bg-variant);
    box-shadow: 0 10px 30px -15px rgba(255, 255, 255, 0.2);
    color: white;
  }
  .projectTechList{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 
    justify-content: flex-end;
    z-index: 2;
    color: white;
  }
  .projectTechListFlipped{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 
    justify-content: flex-start;
    z-index: 2;
    color: white;
  }
  .projectLinks{
    justify-content: flex-end;
    display: flex;
    padding-top: 1rem;
    color: white;
    font-size: 1.3rem;
    gap: 1rem;
  }
  .projectLinksFlipped{
    justify-content: flex-start;
    display: flex;
    padding-top: 1rem;
    color: white;
    font-size: 1.3rem;
    gap: 1rem;
  }
  .projectImage{
    grid-area: 1 / 6 / -1 / -1; 
    position: relative;
    z-index: 1;
    grid-column: 1 / 8;
  }
  .projectImageFlipped{
    grid-column: 7 / -1;
    grid-area: 1 / 6 / -1 / -1; 
    position: relative;
    z-index: 1;
  }
  .imgageWrapper {
    display: block;
    position: relative;
  }
  img {
    transition: all .55s;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    cursor: pointer;
    opacity: 0.6;
  }
  img:hover{
    opacity: 0.5;
  }
  @media screen and (max-width: 1080px){
    .projectContent{
    grid-column: 5 / -1;
  }
    .projectContentFlipped{
      grid-column: 1 / 9;
    }
  .projectImage{
    grid-column: 1 / 9;
  }
  .projectImageFlipped{
    grid-column: 5 / -1;
  }}

  @media screen and (max-width: 800px){
    .projectContent{
    grid-column: 1 / -1;
    text-align: left;
    padding:  1rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    z-index: 2;
    box-shadow: 0 10px 30px -15px rgba(255, 255, 255, 0.2);
  }
  .projectContentFlipped{
    grid-column: 1 / -1;
    text-align: left;
    padding:  1rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    z-index: 2;
    box-shadow: 0 10px 30px -15px rgba(255, 255, 255, 0.2);
  }
  .projectDescription{
    background: none;
    box-shadow: none;
    padding: 0;
  }
  .projectTechList{
    justify-content: flex-start;
    color: var(--color-primary);
    line-height: .2rem;
    padding-top: .5rem;
  }
  .projectTechListFlipped{
    color: var(--color-primary);
    line-height: .2rem;
    padding-top: .5rem;
  }
  .projectLinks{
    justify-content: flex-start;
  }
  .projectImage{
      grid-column: 1 / -1;
      height: 100%;
      opacity: .2;
  }
  .projectImageFlipped{
      grid-column: 1 / -1;
      height: 100%;
      opacity: .2;
  }
  }
  ${'' /* @media screen and (max-width: 800px){
    .projectContent {
      z-index: 1;
    }
    .projectContentFlipped{
      z-index: 1;
    }} */}
  @media screen and (max-width: 750px){
      .container{
     padding: 2rem 2.7rem;
    }
    img {
    height: 20rem;
  }}
  @media screen and (max-width: 420px){
      .container{
     padding: 2rem 1rem;
    }
    img {
    height: 24rem;
  }
  .projectContent{
    box-shadow: 0 10px 30px -15px rgba(255, 255, 255, 0.1);
  }
  .projectContentFlipped{
    box-shadow: 0 10px 30px -15px rgba(255, 255, 255, 0.1);
  }
  }

`;
