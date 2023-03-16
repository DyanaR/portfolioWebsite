import React from 'react'
import styled from "styled-components";

const Experience = () => {
  return (
    <Container>
      <experience id='experience'>
        <div className='container experience_container'>
          <h1>.experience()</h1>
          <div className='resumeBox'>
              <div className='generalInfo'>
                <h3>Manager</h3>
                <label>Manna Juice Bar</label>
                <h4>Aug 2021 - Oct 2022</h4>
                <div className='time'>Full Time</div>
              </div>
              <div className='vl'></div>
              <div className='resumeDesc'>
                <h3>Manna Juice Bar</h3>
                  <li>
                  Hired and trained team members, developing them into a productive team.
                  </li>
                  <li>
                  Promoted a positive atmosphere and went above and beyond to guarantee each customer receives
                  exceptional food, drinks, and service.
                  </li>
                  <li>
                  Properly calculate inventory to order the appropriate supplies in the correct quantities.                  
                  </li>
              </div>
          </div>
          <div className='resumeBox'>
              <div className='generalInfo'>
                <h3>Assistant Manager</h3>
                <label>Quality Food Market</label>
                <h4>June 2017 - May 2021</h4>
                <div className='time'>Full Time</div>
              </div>
              <div className='vl'></div>
              <div className='resumeDesc'>
                <h3>Quality Food Market</h3>
                  <li>
                  Coordinated employee schedules and training programs.
                  </li>
                  <li>
                  Hired and trained associates, developing them into productive team members with
                    excellent product knowledge.
                  </li>
                  <li>
                  Promoted and role-modeled a culture of positive customer service to everyone, every day.
                  </li>
                  <li>
                  Managed social media accounts.
                  </li>
                  <li>
                  Maintained inventory and visual presentation standards on a daily basis.
                  </li>
                  <li>
                  Coordinated inventory, ensured goods are not expired, maintained excellent
                      presentation of all shelves and displays.
                  </li>
              </div>
          </div>
          <div className='resumeBox'>
              <div className='generalInfo'>
                <h3>Substitute Teacher</h3>
                <label>MISD</label>
                <h4>2017 - 2018</h4>
                <div className='time'>Part Time</div>
              </div>
              <div className='vl'></div>
              <div className='resumeDesc'>
                <h3>Mansfield Independent School District</h3>
                  <li>
                  Served as a regular classroom teacher by providing instructions and maintaining a positive learning
                  environment for students in grades kindergarten through sixth.                  
                  </li>
              </div>
          </div>
        </div>
      </experience>
    </Container>
  )
}

const Container = styled.div`
experience {
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
  h4{
    font-weight: 400;
    font-size: .9rem;
    color: var(--color-light);
  }
  label{
    color: var(--color-light);
    font-weight: 400;
    font-style: italic;
  }
  li {
    color: var(--color-light);
  }
  li::before{
    content: "▹ ";
    color: var(--color-primary);
  }
  .resumeBox{
    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--color-bg-variant);
    display: flex;
    margin-bottom: 3rem;
  }
  .generalInfo{
    min-width: 10rem;
  }
  .time{
    background-color: var(--color-primary);
    color: var(--color-white);
    max-width: 5rem;
    text-align: center;
    border-radius: .2rem;
    font-size: .8rem;
    font-weight: 600;
    margin-top: .5rem;
  }
  .vl{
    content: '';
    display: block;
    margin-left: 2rem;
    height: auto;
    width: 1px;
    background-color: var(--color-light);
  }
  .resumeDesc{
    margin-left: 3rem;
  }

  @media screen and (max-width: 800px){
    .vl{
      display: none;
    }
    .resumeBox{
      display: block;
    }
    .resumeDesc{
      margin: 0;
      padding-top: 1rem;
    }
  }

`;

export default Experience