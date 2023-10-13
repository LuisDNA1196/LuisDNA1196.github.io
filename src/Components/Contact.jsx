import React from 'react';
import '../Styles/contact.css'; // Archivo de estilos CSS

function Contact() {
        const emailSubject = "Contacto desde mi portafolio"; // Asunto del correo electrónico
      
        return (
          <div className="contact-container">
            <h2>Contact Me.</h2>
            <p>If you'd like to get in touch, feel free to reach out through the following methods:</p>
            <ul className="contact-list">
              <li>Email: <a href={`mailto:luisdna96@gmail.com?subject=${encodeURIComponent(emailSubject)}`}>luisdna96@gmail.com</a></li>
              <li>Phone: (+52) 3317058587</li>
            </ul>
            <p className='goodbye'>Looking forward to connect with you!</p>
          </div>
        );
      }

export default Contact;
