import React from 'react'
import { Container, ContainerIcon, H1, Section } from '../Contato/contatoStyles'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub,FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contato = () => {

  
  return (
    <Section>
      <H1><span>Entre em</span> Contato</H1>
      <Container>
        <div>
          <ContainerIcon>
          <BsLinkedin size={30} className='icon'  />
          </ContainerIcon>
          <a href="https://www.linkedin.com/in/janiele-cristina/" target='_blanck'>Linkedin</a>
        </div>

        <div>
          <ContainerIcon>
          <FaGithub size={30}  className='icon'/>
          </ContainerIcon>
          <a href="https://github.com/JanieleCristina006" target='_blanck'>Github</a>
        </div>

        <div>
         <ContainerIcon>
            <FaWhatsapp size={30} className='icon' />
         </ContainerIcon>
          <a href="https://wa.me/5535997554926?text=Ol%C3%A1+Janiele%2Cvi+seu+portifolio+e+estou+entrando+em+contato%21" target='_blanck'> Whatsapp</a>
        </div>

        <div>
          <ContainerIcon>
          <SiGmail size={30} color='#a430de' className='icon' />
          </ContainerIcon>
          <a href="mailto:janielecristina81@gmail.com?subject=&body=" target='_blanck'>Gmail</a>
        </div>

      </Container>
    </Section>
  )
}
