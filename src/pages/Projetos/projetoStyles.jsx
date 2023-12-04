import styled from 'styled-components'


export const Section = styled.section`
width: 100%;
  height: auto; /* Alterado para 'auto' para que a altura seja dinâmica */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10vh;

  @media (min-width: 320px) and (max-width: 500px) {
    flex-direction: column;
    align-items: center; /* Centraliza os containers em telas menores */
  }
`


export const Container = styled.div`
   width: 40%;
  height: 450px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 4px #ffffff;
  margin-bottom: 70px; 

  @media (min-width: 320px) and (max-width: 500px) {
    width: 80%;
    margin-bottom: 40px; /* Adicionado espaço entre os containers */
   
  }
  img {
    width: 100%;
    height: 360px;
    border-radius: 10px 10px 0 0;
    transition: filter 0.3s ease-in-out;
  }

  span {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    z-index: 1;
    
  }

  &:hover img {
    filter: blur(6px);
    transition:1.3s;
  }

  &:hover span {
    display: block;
  }

  .icon{
    color:#f821ff;
  }
`;


export const Div = styled.div`
 width:100%;
 height:100px;
 display:flex;
 justify-content:center;
 align-items:center;
 gap:40px;
 //background-color:#574444;

 .icon{
  font-size:40px;
  margin-left:20px;
 }

 .img-styled{
  width:105px;
  height:105px;
  object-fit:cover;
  margin-top:30px;
 }

`