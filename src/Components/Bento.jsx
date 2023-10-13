import React from 'react';
import react from '../assets/reactlogo.png'
import css from '../assets/csslogo.png'
import js from '../assets/jslogo.png'
import html from '../assets/htmllogo.png'
import '../Styles/bento.css'; // Archivo de estilos CSS

const cardData = [
  { color: 'blue', image: 'public/pokedex.png', title: 'Pokedex', description: 'Using PokeAPI to obtain details for multiple Pokémon,with a day/night mode function.', skills:[{name:'React',image: react},{name:'CSS',image: css},{name:'JS',image: js},{name:'HTML',image: html},],link:'https://pokedexldna.vercel.app/', }, 
  { color: 'green', image: 'public/tiendavirtual.png', title: 'Hasta el Ultimo Pixel Shop', description: 'Geek product online store with log-in page, as well as the ability to add, edit, and delete products.', skills:[{name:'HTML',image: html},{name:'CSS',image: css},{name:'JS',image: js}], link:'https://heupshop-qzwk2ow8e-luisdna1196.vercel.app/' },
  { color: 'brown', image: 'public/encriptadortexto.png', title: 'Text Encrypter', description: 'Tool for encrypting and decrypting text.', skills:[{name:'HTML',image: html},{name:'CSS',image: css},{name:'JS',image: js}],link:'https://encriptador-de-texto-65ihp8ov8-luisdna1196.vercel.app/'},
  { color: 'orange', image: 'public/restaurantlandingpage.png', title: 'Restaurant page', description: 'Restaurant Homepage,using materialUI and react-icons', skills:[{name:'React',image: react},{name:'CSS',image: css},{name:'JS',image: js},{name:'HTML',image: html}], link:'https://resturant-homepage-hl4jqes5b-luisdna1196.vercel.app/'  }
  // Agrega más objetos aquí si es necesario
];

function Bento() {

  return (
    <>
      <div id="cards">
        {cardData.map((card, index) => (
          <a
          href={card.link}
          target="_blank"  // Agrega este atributo para abrir en una nueva pestaña o ventana
          className="card"
          data-color={card.color}
          key={index}
        >
            <h2 className="card-title btn-grad1">{card.title}</h2>
            <div className="image-container">
            <img className="card-front-image card-image" src={card.image} alt={card.title} />
            </div>
            <div className="card-description">{card.description}</div>
            <div className="card-logo-skills">
            {card.skills.map((skill, skillIndex) => (
            <img className='logo-skills-img' key={skillIndex} src={skill.image} alt={skill.name} />  ))}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default Bento;
