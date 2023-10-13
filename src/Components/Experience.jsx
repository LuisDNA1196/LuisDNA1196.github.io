import React from 'react';
import '../Styles/experience.css'; // Archivo de estilos CSS

const experiences = [
  {
    title: 'Tienda Geek',
    image: 'ruta-de-la-imagen1.jpg',
    description: 'Breve descripción del proyecto 1.',
    url: 'https://www.google.com.mx'
  },
  {
    title: 'Proyecto 2',
    image: 'ruta-de-la-imagen2.jpg',
    description: 'Breve descripción del proyecto 2.',
    url: 'https://www.google.com.mx'
  },
  {
        title: 'Tienda Geek',
        image: 'ruta-de-la-imagen1.jpg',
        description: 'Breve descripción del proyecto 1.',
        url: 'https://www.google.com.mx'
      },
      {
        title: 'Proyecto 2',
        image: 'ruta-de-la-imagen2.jpg',
        description: 'Breve descripción del proyecto 2.',
        url: 'https://www.google.com.mx'
      },
  // Agrega más objetos para cada experiencia
];

function Experience() {
  return (
    <div className="experience-container">
      <h2>Experiencia</h2>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <a  href={experience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="experience-item"
          key={index}
          >
            <img src={experience.image} alt={experience.title} />
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Experience;
