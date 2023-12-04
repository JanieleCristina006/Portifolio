import styled, { keyframes } from 'styled-components';


export const Section = styled.section`
display:flex;
margin-top: 10vh;
height:190vh;
//border:red solid;
flex-direction:column;
align-items:center;

@media(min-width:320px) and (max-width: 500px){
    //border:2px red solid;
     height:auto;
     padding-bottom:15vh;
}


`

export const ContainerSobre = styled.div`
width:72%;
height:75vh;
display:flex;
justify-content:space-between;
align-items:center;
//margin-top:10vh;
//border:#ffffff solid;

@media(min-width:320px) and (max-width: 500px){
       flex-direction:column;
       width:95%;
       height:800px;
    }
`

export const ContainerImg = styled.div`
   height:68vh;
   width:40%;
   display:flex;
   justify-content:center;
   align-items:center; 
   //border:blue solid;

   @media(min-width:320px) and (max-width: 500px){
    width:95%;
   }

  
`

export const Img = styled.img`
max-width:100%;
height:400px;

@media(min-width:320px) and (max-width: 500px){
    height:250px;
}
`
export const ContainerTexto = styled.div`
width:38vw;
height:68vh;

h3{
    font-family: 'Poppins', sans-serif;
    font-weight:800;
    color:#a430de;
    font-size:1.5rem;
}

h2{
   color:#4B4B4B;
   font-family: 'Poppins', sans-serif;
    font-weight:400;
    font-size:2.3rem;
    margin-top:15px;
}

p{
    color:#a19191;
    font-size:1.1rem;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    line-height:32px;
}

@media(min-width:320px) and (max-width: 500px){
       width:100%;
       height:700px;
       //border:red solid;
       margin-top:30px;
    
    p{
        font-size:0.8rem; 
    }

    h3,h2,p{
        text-align:center;
    }

}
`
export const ContainerFormacacao = styled.div`
width:72%;
height:33vh;
border:#A430DE solid;
box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); 
border-radius:12px;
margin-top:55px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

@media(min-width:320px) and (max-width: 500px){
        width:90%;
        //padding:15px;
        height:350px;
        align-items:center;
      //padding-bottom:20px;
        margin-top:85px;
        h2{
            font-size:1.1rem;
            text-align:center;
            
        }

        .icon-mortarboard{
            margin-top:20px;
        }
    }

h2{
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    color:#999292;
    


    .icon-mortarboard{
        background-color:#7F20D1;
        padding:5px;
        border-radius:50%;
        
    }

}
`


export const H1 = styled.h1`
//border:blue solid;
width:100%;
height:8vh;
display:flex;
align-items:center;
justify-content:center;
font-family: 'Poppins', sans-serif;
font-weight:500;
font-size:1.7rem;
color:#A430DE;
gap:10px;

@media(min-width:320px) and (max-width: 500px){
    margin-top:10px;
}

`
export const ContainerSkills = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:72%;
height:40vh;
border:#A430DE solid;
box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
margin-top:16vh;

h1{
    font-size:2.3rem;
    font-family: 'Poppins', sans-serif;
    font-weight:500;
    color:#A430DE;
    margin-top:15px;
}

@media(min-width:320px) and (max-width: 500px){
    margin-top:8vh;
    width:90%;
    height:200px;

    //padding-bottom:10vh;
}

`

const carousel = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Div = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%; /* Ajuste conforme necessário */

  span {
    flex: 0 0 75px;
    margin: 10px;
    animation: ${carousel} 3s linear infinite;
  }
`;