import styled from "@emotion/styled"
import { useState , useEffect } from "react"
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"

const Heading = styled.h1`
  text-align: center;
  color: var(--Cyan-muy-oscuro);
  margin-top: 3rem;
  text-transform: uppercase;
  margin-bottom: 2.5rem;

  span{
    display: block;
    margin-top: -5px;
  }

  @media(min-width: 1440px)  {
      margin-top: 0;
  }

`

const Contenedor = styled.div`
  background-color: var(--Blanco);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 16px;

  @media (min-width: 1440px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 3rem;
    width: 50%;
    margin: 0 auto;
  }
`

function App() {

  const [value , setValue] = useState({})

  return (
    <>
      <Heading>SPLI<span>TTER</span></Heading>

      <Contenedor>
        <Formulario
          setValue={setValue} 
        />

        <Resultado
          value={value}
        />
        
      </Contenedor>
    </>
   
  )
}

export default App
