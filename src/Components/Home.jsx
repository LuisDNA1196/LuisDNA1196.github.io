import React from 'react';
import Bigtext from './Texts/Bigtext';
import '../Styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faFilePdf } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <div className='home-main-container'>
      <div className='text-container'>
        <div className='text-content'>
          <h1>I'm Luis Narvaez</h1>
          <p>
          A passionate medical doctor and an enthusiastic web developer, my journey has taken me from hospital rooms to lines of code. Here, I find the opportunity to merge my love for medicine and technology.  
          As an <Bigtext />, I'm always seeking new challenges. I craft digital solutions with a creative approach and a scientific mindset.
          </p>
        </div>
        <div className='image-container'>
          <img href='' className='kirby' src="../src/assets/mifoto.jpg" alt="" />
        </div>
      </div>
      <div className='social-media-container'>
        <a className='social-media' href="https://github.com/LuisDNA1196" target='blank'>
          <FontAwesomeIcon className='FontAwesomeIcon' icon={faGithub} />
          GitHub
        </a>
        <a className='social-media' href="https://www.linkedin.com/in/luisdna96/" target='blank'>
          <FontAwesomeIcon className='FontAwesomeIcon' icon={faLinkedin} />
          Linked-in
        </a>
        <a className='social-media' href="https://drive.google.com/file/d/1qrtJTJIZvM1QDfh5JdvdVli5LVV3uON_/view" target='blank'>
          <FontAwesomeIcon className='FontAwesomeIcon' icon={faFilePdf} />
          Curriculum
        </a>
      </div>
    </div>
  );
}

export default Home;
