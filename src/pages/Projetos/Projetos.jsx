import React from 'react'
import { H1 } from '../Contato/contatoStyles'
import { Container, Div, Section } from '../Projetos/projetoStyles'

import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt,FaGithub  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";

import Floricultura from '../../assets/floricultura.png'
import Sefcare from '../../assets/selfcare.png'
import Lampada from '../../assets/lampada.png'
import Jordan from '../../assets/jordan.png'
import Calculadora from '../../assets/calculadora.png'
import Styled from '../../assets/styled.png'
import Todo from '../../assets/todo.png'
import Loja from '../../assets/loja.png'
import Fantastika from '../../assets/fantastika.png'


export const Projetos = () => {
  return (
    <>
    <H1>Meus Projetos</H1>
       <Section>

       <Container>
          <img src={Loja} />
      <span>
        <a href="https://lojade-celular.vercel.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40}className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/LojadeCelular" target="_blank" rel="noopener noreferrer"><FaGithub size={40}className='icon' /></a>
        </Div>
      </span>
      <Div>
      <FaReact size={40} color='#5ED3F3' />
      <img src={Styled} className='img-styled' />
      </Div>
       </Container>


       <Container>
          <img src={Todo} />
      <span>
        <a href="https://todo-list-zeta-virid.vercel.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40} className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/TodoList" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className='icon' /></a>
        </Div>
      </span>
      <Div>
      <FaReact size={40} color='#5ED3F3' />
      <img src={Styled} className='img-styled' />
      </Div>
       </Container>

       <Container>
          <img src={Calculadora} />
      <span>
        <a href="https://653a6613b6746917f99a752e--glistening-squirrel-9f5efe.netlify.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40} className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/Calculadora-React" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className='icon' /></a>
        </Div>
      </span>
      <Div>
      <FaReact size={40} color='#5ED3F3' />
      <img src={Styled} className='img-styled' />
      </Div>
       </Container>


       <Container>
          <img src={Jordan} />
      <span>
        <a href="https://65136423cdfb02271a8b059b--comfy-clafoutis-888141.netlify.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40}className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/lampada-JS" target="_blank" rel="noopener noreferrer"><FaGithub size={40}className='icon' /></a>
        </Div>
      </span>
      <Div>
      <FaReact size={40} color='#5ED3F3' />
      <FaCss3Alt className='icon' color='#254BDD' />
      </Div>
       </Container>
        
        <Container>
          <img src={Floricultura} />
      <span>
        <a href="https://65676c76b171ab3dfb508860--capable-bombolone-60149d.netlify.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40}className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/Floricultura" target="_blank" rel="noopener noreferrer"><FaGithub size={40}className='icon' /></a>
        </Div>
      </span>
      <Div>
        <IoLogoHtml5 className='icon' color='#E96228' />
        <FaCss3Alt className='icon' color='#254BDD' />
        <IoLogoJavascript className='icon' color='#EFD81D' />
      </Div>
       </Container>

       <Container>
          <img src={Sefcare} />
      <span>
        <a href="https://64b57af636527333e8ba9491--boisterous-figolla-3c7c57.netlify.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40} className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/Floricultura" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className='icon' /></a>
        </Div>
      </span>
      <Div>
        <IoLogoHtml5 className='icon' color='#E96228' />
        <FaCss3Alt className='icon' color='#254BDD' />
      </Div>
       </Container>

       <Container>
          <img src={Fantastika} />
      <span>
        <a href="https://64c292dd1a021f0e18ac1599--clinquant-cannoli-36faf9.netlify.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40} className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/Floricultura" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className='icon'/></a>
        </Div>
      </span>
      <Div>
        <IoLogoHtml5 className='icon' color='#E96228' />
        <FaCss3Alt className='icon' color='#254BDD' />
      </Div>
       </Container>

       <Container>
          <img src={Lampada} />
      <span>
        <a href="https://64fb731c860af04967867ac4--monumental-puffpuff-d310de.netlify.app/" target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={40} className='icon' /></a>
        <Div>
        <a href="https://github.com/JanieleCristina006/lampada-JS" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className='icon' /></a>
        </Div>
      </span>
      <Div>
        <IoLogoHtml5 className='icon' color='#E96228' />
        <FaCss3Alt className='icon' color='#254BDD' />
        <IoLogoJavascript className='icon' color='#EFD81D' />
      </Div>
       </Container>

       </Section>
    </>
  )
}
