import React from 'react'

import Menina from '../../assets/menina.gif'
import Typewriter from 'typewriter-effect';
import { Button, ContainerImagem, ContainerTexto, Section } from '../Home/homeStyle';
import { FaDownload } from "react-icons/fa";


export const Home = () => {

  const handleDownload = () => {
    // Lógica para gerar e baixar o currículo
    const resumeData = 'https://drive.google.com/file/d/1PMTRA5eJVDceJYuBY3Or_j2eslWI_Wjh/view?usp=drive_link'; // Seu currículo em formato de dados ou URL

    // Cria um elemento de link temporário
    const link = document.createElement('a');

    // Define o href do link como os dados do currículo
    link.href = resumeData;

    // Define o atributo "download" para especificar o nome do arquivo ao baixar
    link.download = 'meu_curriculo.pdf';

    // Adiciona o link ao corpo do documento
    document.body.appendChild(link);

    // Simula um clique no link para iniciar o download
    link.click();

    // Remove o link do corpo do documento após o download
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
