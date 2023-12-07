import React from 'react';
import Lampada from '../../assets/lampada.png';
import Floricultura from '../../assets/floricultura.png';
import Todo from '../../assets/todo.png';
import Calculadora from '../../assets/calculadora.png';
import Loja from '../../assets/loja.png';
import Jordan from '../../assets/jordan.png';
import { Container, H1, Section } from './projetoStyles';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projetosData = [
  {
    image: Loja,
    name: 'Loja',
    liveLink: 'https://lojade-celular.vercel.app/',
    githubLink: 'https://github.com/JanieleCristina006/LojadeCelular',
    technologies: ['React', 'Styled-Component'],
  },
  {
    image: Calculadora,
    name: 'Calculadora',
    liveLink: 'https://653a6613b6746917f99a752e--glistening-squirrel-9f5efe.netlify.app/',
    githubLink: 'https://github.com/JanieleCristina006/Calculadora-React',
    technologies: ['React', 'Styled-Component'],
  },
  {
    image: Jordan,
    name: 'Jordan',
    liveLink: 'https://65136423cdfb02271a8b059b--comfy-clafoutis-888141.netlify.app/',
    githubLink: 'https://github.com/JanieleCristina006/Tenis-React',
    technologies: ['React', 'Styled-Component'],
  },
  {
    image: Todo,
    name: 'TodoList',
    liveLink: 'https://todo-list-zeta-virid.vercel.app/',
    githubLink: 'https://github.com/JanieleCristina006/TodoList',
    technologies: ['React', 'Styled-Component'],
  },
  {
    image: Floricultura,
    name: 'Floricultura',
    liveLink: 'https://capable-bombolone-60149d.netlify.app/',
    githubLink: 'https://github.com/JanieleCristina006/Floricultura',
    technologies: ['Html', 'Css', 'Javascript'],
  },
  {
    image: Lampada,
    name: 'Lampada',
    liveLink: 'https://64fb731c860af04967867ac4--monumental-puffpuff-d310de.netlify.app/',
    githubLink: 'https://github.com/JanieleCristina006/lampada-JS',
    technologies: ['Html', 'Css', 'Javascript'],
  },
];

const Projeto = ({ projeto }) => (
  <div>
    <img src={projeto.image} alt="" />
    <p>{projeto.name}</p>
    <span>
      <p>
        <a href={projeto.liveLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt size={35} className="icon" />
        </a>
      </p>
      <p>
        <a href={projeto.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub size={35} className="icon" />
        </a>
      </p>
    </span>
    <span className="tecnologias">
      {projeto.technologies.map((tech, index) => (
        <h4 key={index}>{tech}</h4>
      ))}
    </span>
  </div>
);

export const Projetos = () => {
  return (
    <>
      <Section>
        <H1>Projetos</H1>
        <Container>
          {projetosData.map((projeto, index) => (
            <Projeto key={index} projeto={projeto} />
          ))}
        </Container>
      </Section>
    </>
  );
};
