import styled from "@emotion/styled"
import { useState, useEffect } from "react"

const Contenedor = styled.div`
    background-color: var(--Cyan-muy-oscuro);
    border-radius: 10px;
    padding: 1.5rem;

    @media (min-width: 1440px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
const Contenido = styled.div`
    display: flex;
    justify-content: space-between;
`
const Texto = styled.p`
    margin-top: 10px;
    color: var(--Blanco);

    span{
        display: block;
        color: var(--Cyan-grisaceo);
    }
`
const Reset = styled.button`
    background-color: var(--Cyan-fuerte);
    text-align: center;
    font-family: "Space Mono" , sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: var(--Cyan-muy-oscuro);
    text-transform: uppercase;
    padding: 5px;
    border-radius: 3px;
    border: none;
    width: 100%;
    margin-top: 2rem;
    cursor: pointer;

    &:disabled{
        background-color: #0b686d;
        color: #045d62;
        pointer-events: none
    }

    &:hover{
      background-color: #9fe8df;
      transition: 0.1s ease-in;
    }
`

const Monto = styled.p`
    color: var(--Cyan-fuerte);
    font-size: 36px;
    margin-top: 10px;
`

const Resultado = ({value}) => {

    const { amount, people, tip } = value;

    const [total, setTotal] = useState(0)
    const [individual, setIndividual] = useState(0)
    const [habilitado, setHabilitado] = useState(false)

    useEffect(() => {
        if (Object.keys(value).length > 0) {
            const nuevoTotal = (amount * tip).toFixed(2)
            const nuevoIndividual = (nuevoTotal / people).toFixed(2)

            setTotal(nuevoTotal);
            setIndividual(nuevoIndividual);
            setHabilitado(true);
            return
        }
        setHabilitado(false)
    }, [value])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleReset = () => {
        window.location.reload()
    }

    return (
        <Contenedor>
            <div>
                <Contenido>
                    <Texto>Tip Amount<span>/{" "}person</span></Texto>
                    <Monto>{formatearCantidad(individual)}</Monto>
                </Contenido>
                <Contenido>
                    <Texto>Total<span>/{" "}person</span></Texto>
                    <Monto>{formatearCantidad(total)}</Monto>
                </Contenido>
            </div>
       
            <Reset
                disabled={!habilitado}
                onClick= {handleReset}
            >Reset</Reset>
      </Contenedor>
      
  )
}

export default Resultado