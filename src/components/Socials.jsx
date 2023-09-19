import React from 'react'
import styled from "styled-components";
import {SlSocialLinkedin} from 'react-icons/sl'
import {FiGithub} from 'react-icons/fi'
import Resume from '..//assets/resume.pdf'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {MdOutlineEmail} from 'react-icons/md'

const socials = () => {
  return ( <Container>
    <socials>
        <div className='socials__container'>
            <a href='https://www.linkedin.com/in/dyana-rahhal-b39667227/' target='_blank' rel="noreferrer"><SlSocialLinkedin/></a>
            <a href="https://github.com/DyanaR" target='_blank' rel="noreferrer"><FiGithub/></a>
            <a href={Resume} target='_blank' rel="noreferrer"><HiOutlineDocumentText/></a>
            <a href="mailto: dyanarahhal98@gmail.com" target='_blank' rel="noreferrer"><MdOutlineEmail/></a>
        </div> 
    </socials>
    </Container>
  )
}

export default socials

const Container = styled.div`
    a {
        font-size: 1.5rem;
        color: var(--color-light);  
    }
    .socials__container{
        display: flex;
        bottom: 0;
        left: 0;
        width: 2rem;
        flex-direction: column;
        gap: 1rem;
        z-index: 2;
        position: fixed;
        margin-left: 3rem;      
    }
    .socials__container::after{
        content: '';
        width: 1px;
        height: 5rem;
        background-color: var(--color-light);
        margin: 0 .7rem;
    }
    @media screen and (max-width: 800px){ 
        .socials__container{
            display: none;
        }
    }
`;