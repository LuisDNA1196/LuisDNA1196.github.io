import React from 'react';
import '../Styles/projects.css';
import react from '../assets/reactlogo.png'
import css from '../assets/csslogo.png'
import js from '../assets/jslogo.png'
import html from '../assets/htmllogo.png'

const projectsData = [
        {
          title: 'Pokedex',
          image: 'public/pokedex.png',
          description: 'Using PokeAPI to obtain details for multiple Pokémon,with a day/night mode function.Streaming platform for movies. Explore a wide variety of films online with an intuitive and appealing interface.',
          skills: [
            { name: 'React', image: react },
            { name: 'CSS', image: css },
            { name: 'JS', image: js },
            { name: 'HTML', image: html },
          ],
          link: 'https://pokedexldna.vercel.app/',
          },
          {
          title: 'Hasta el Ultimo Pixel Shop',
          image: 'public/tiendavirtual.png',
          description: 'Online store for geek products. Discover a unique collection of items related to geek culture and video games.',
          skills: [
            { name: 'CSS', image: css },
            { name: 'JS', image: js },
            { name: 'HTML', image: html },
          ],
          link:'https://heupshop.vercel.app/'
          },
          {
          title: 'Text Encrypter',
          image: 'public/encriptadortexto.png',
          description: 'Tool for encrypting and decrypting text. Protect your messages with secure encryption or reverse the process to access the original content.',
          skills: [
            { name: 'CSS', image: css },
            { name: 'JS', image: js },
            { name: 'HTML', image: html },
          ],
          link:'https://encriptador-de-texto-65ihp8ov8-luisdna1196.vercel.app/'
          },
          {
          title: 'Restaurant Page',
          image: 'public/restaurantlandingpage.png',
          description: 'Landing page for a restaurant. Showcase the menu, location, and hours of operation in a modern and attractive design.',
          skills: [
            { name: 'React', image: react },
            { name: 'CSS', image: css },
            { name: 'JS', image: js },
            { name: 'HTML', image: html },
          ],
          link:'https://resturant-homepage-hl4jqes5b-luisdna1196.vercel.app'
          },
          {
          title: 'Slider-"tinder"',
          description: 'Tinder-like slider displaying different images that can be swiped to the next image by liking or using the "X" button, ideal for menus or image sets.',
          image: 'public/slidercards.png',
          skills: [
            { name: 'CSS', image: css },
            { name: 'JS', image: js },
            { name: 'HTML', image: html },
          ],
          link: 'https://slider-tinderlike-pacwl5s69-luisdna1196.vercel.app/',
          },
          
   {
    title: 'Rick and morty API',
    description: 'Using Rick and morty API to get details of randomized characters, using log-in validations',
    image: 'public/ricknmortyapi.png',
    skills:[{name:'React',image: react},{name:'CSS',image: css},{name:'JS',image: js},{name:'HTML',image: html},],
    link:'https://luis-dna-1196-github-io.vercel.app/'
      },
];

const Projects = () => {
  return (
    <div className='projects-main-container'>
      <h2>My Projects.</h2>
      <div className='projects-container'>
        {projectsData.map((project, index) => (
          <div className='project-card' key={index}>
            <img className='project-image' src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-logo-skills">
            {project.skills.map((skill, skillIndex) => (
            <img className='project-skills-img' key={skillIndex} src={skill.image} alt={skill.name} />  ))}
            </div>
            <a target="_blank"  href={project.link}>See more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
