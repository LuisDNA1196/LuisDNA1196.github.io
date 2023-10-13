import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToEye, faBars } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal/Modal1.jsx';
import '../Styles/navbar.css';
import Bento from './Bento.jsx';
import { Link } from 'react-router-dom';

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openProjectModal = (event) => {
    event.preventDefault();
    setProjectOpen(true);
  };



  return (
    <nav className="navbar-main-container">
      <div className="navbar-container">
       <Link to ='/*'> <img className='logo' src="src\assets\logoprog.png" alt="logo" /> </Link>
        <a
          className='navbar-texts navbar-texts-hover'
          href=""
          onClick={openProjectModal}
        >
          View my Projects <FontAwesomeIcon className='eyeicon' icon={faArrowsToEye}/>
        </a>
        <Modal isOpen={projectOpen} onClose={() => setProjectOpen(false)}>
          <Bento/>
        </Modal>
        <div className={`burger-menu ${modalOpen ? 'open' : ''}`} onClick={toggleModal}>
          <FontAwesomeIcon icon={faBars}/>
        </div>
      </div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Link to ='/*' onClick={toggleModal}> <h1>Menu.</h1> </Link>
        <Link to = '/*' className='burger-menu-text' href="#" onClick={toggleModal} ><h4>1.</h4>Home.</Link>
        <Link to = '/about-me' className='burger-menu-text' href="#" onClick={toggleModal} ><h4>2.</h4>About me.</Link>
        <Link to = '/projects' className='burger-menu-text' href="#"onClick={toggleModal} ><h4>3.</h4>Projects.</Link>
        <Link to = '/contact' className='burger-menu-text' href="#"onClick={toggleModal} ><h4>4.</h4>Contact me.</Link>
      </Modal>
    </nav>
  );
}

export default Navbar;
