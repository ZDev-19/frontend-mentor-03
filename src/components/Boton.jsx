import styled from "@emotion/styled"

const Button = styled.div`
    background-color: var(${props => props.bg});
    color: var(${props => props.textColor});
    text-align: center;
    font-family: 'Space Mono' , sans-serif;
    border-radius: 5px;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;

    &:hover{
      background-color: #9fe8df;
      color: var(--Cyan-muy-oscuro);
      transition: 0.1s ease-in;
    }
`

const Boton = ({value, etiqueta, activo,setTip,setActive}) => {

  const handleClick = (e) => {
    e.preventDefault()

    setTip(value)
    setActive(e)
  }

  return (
    <Button
      onClick={handleClick}
      bg={`${activo ? '--Cyan-fuerte' : '--Cyan-muy-oscuro'}`}
      textColor = {`${activo? '--Cyan-muy-oscuro' : '--Blanco'}`}
    >{etiqueta
      }</Button>
  )
}

export default Boton