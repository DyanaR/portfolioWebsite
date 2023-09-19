import React from "react";
import styled from "styled-components";
import background from "..//assets/background.png";
// import Resume from '..//assets/resume.pdf'
import { MdOutlineEmail } from "react-icons/md";

const Header = () => {
  return (
    <Container>
      <header>
        <div className="container header__container">
          <div className="right">
            {/* <h4 className='intro'>Hi, my name is</h4> */}
            <h1>Dyana Rahhal</h1>
            <h2>Frontend Developer</h2>
            <h4 className="text-light">
              I'm a passionate frontend web developer with an eye for code
              aesthtics, crafting every pixel to perfection.
            </h4>
            {/* <a href={Resume} target='_blank' rel="noreferrer" className="Resume"><button className='btn'>Resume</button> </a> */}
            <a href="/#contact">
              <button className="btn">
                <MdOutlineEmail style={{fontSize: "1.3rem"}} />
                Let's get in touch!
              </button>
            </a>
          </div>
          <div className="left">
            <img className="background" src={background} alt="background" />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  header {
    height: auto;
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
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .header__container {
    padding: 5rem;
    display: flex;
    height: 100%;
    position: relative;
    justify-content: space-between;
  }
  .left {
    padding-left: 2rem;
  }
  .background {
    height: 18rem;
    width: 28rem;
  }


  @media screen and (min-width: 1650px) {
    .background {
      height: 25rem;
      width: 35rem;
    }
  }
  @media screen and (max-width: 1150px) {
    .left {
      display: none;
    }
    h4 {
      ${"" /* max-width: 60rem; */}
    }
  }

  @media screen and (max-width: 1438px) {
    h1 {
      font-size: 3.5rem;
      min-width: 28rem;
    }
    h2 {
      font-size: 1.7rem;
    }
  }

  @media screen and (max-width: 620px) {
    .header__container {
      padding: 2rem 2.7rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h4 {
      max-width: 22rem;
    }
  }

  @media screen and (max-width: 420px) {
    .header__container {
      padding: 2rem 1rem;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
