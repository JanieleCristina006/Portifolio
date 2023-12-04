  import React from 'react'
  import {  ContainerFormacacao, ContainerImg, ContainerSkills, ContainerSobre, ContainerTexto, Div, H1, Img, Section } from './sobreStyles'
  import { GoMortarBoard } from "react-icons/go";
  import { BsFillMortarboardFill } from "react-icons/bs";
  import { FaHtml5,FaGitAlt ,FaReact  } from "react-icons/fa";
  import { FaCss3Alt } from "react-icons/fa6";
  import { SiStyledcomponents } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io5";
  import Profile from '../../assets/profile-pic(1).png';
  //import { Container } from '../components/GlobalStyle'


  export const Sobre = () => {

    return (
      <>
      
      <Section>
          <ContainerSobre>
          <ContainerImg>
          <Img src={Profile} alt="profile" />
          </ContainerImg>

          <ContainerTexto>
            <h3>Um pouco sobre mim</h3>
            <h2>Sobre</h2>
            <p>
            Me chamo Janiele, tenho 21 anos, e meu percurso no desenvolvimento front-end começou em 2022, quando mergulhei nos estudos de HTML e CSS. A partir dessa base, aprofundei meu conhecimento em JavaScript e, atualmente, estou focada em aprimorar minhas habilidades com React. Estou em busca da minha primeira oportunidade no mercado de trabalho como desenvolvedora front-end júnior, seja por meio de estágio ou posição júnior. Minha dedicação aos estudos e meu constante foco no aprendizado refletem meu comprometimento em evoluir e contribuir de maneira
             significativa para projetos futuros.

            </p>
          </ContainerTexto>
          </ContainerSobre>


        <ContainerFormacacao>
          <H1>Formação<GoMortarBoard color='#f0e8e8' /></H1>
          <h2><BsFillMortarboardFill className='icon-mortarboard' color='#f0e8e8' size={40}/> -Universidade José do Rosário Vellano - Ciência da Computação (1º a 3º Período)</h2>
          <h2><BsFillMortarboardFill  className='icon-mortarboard' color='#f0e8e8' size={40}/> -Universidade Cruzeiro do Sul Virtual - Período Atual: 5º Período</h2>
        </ContainerFormacacao>

        <ContainerSkills>
          <h1>Skills</h1>
          <Div>
            <span><FaHtml5 size={75} color='#F4470B' /></span>
            <span><FaCss3Alt size={75} color='#0068BA' /></span>
            <span><IoLogoJavascript size={75} color='#EFD81D' /></span>
            <span><FaGitAlt size={75} color='#E94E31'  /></span>
            <span><SiStyledcomponents size={75} color='#F7CC5C' /></span>
            <span><FaReact size={75} color='#00CFF7' /></span>
          </Div> 
        </ContainerSkills>
      </Section>
      </>
    )
  }

