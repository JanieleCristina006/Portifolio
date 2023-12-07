import React from 'react'

import Menina from '../../assets/menina.gif'
import Typewriter from 'typewriter-effect';
import { Button, ContainerImagem, ContainerTexto, Section } from '../Home/homeStyle';
import { FaDownload } from "react-icons/fa";


export const Home = () => {

  const handleDownload = () => {
    
    const resumeData = 'https://drive.google.com/file/d/1PMTRA5eJVDceJYuBY3Or_j2eslWI_Wjh/view?usp=drive_link';

    const link = document.createElement('a');
    link.href = resumeData;
    link.download = 'meu_curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  return (
    <>
    <Section>

    <ContainerImagem>
     <img src={Menina} />
  </ContainerImagem>
      
  <ContainerTexto>
    <h1>Eu sou a Janiele Cristina!</h1>
  <span>
    <Typewriter
  options={{
    strings: ['Desenvolvedora Front-End'],
    autoStart: true,
    loop: true,
  }}/>
  </span>

  <Button onClick={handleDownload}>
      Baixar Currículo
      <FaDownload className='icon' />
    </Button>
  </ContainerTexto>
    </Section>
    </>
  )
}
