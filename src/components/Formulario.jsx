import styled from '@emotion/styled'
import Boton from './Boton'
import Mensaje from './Mensaje'

import { porcentajes } from "../data/Porcentajes"
import { useState, useEffect } from 'react'


const Label = styled.label`
    color: var(--Cyan-grisaceo-oscuro);
    margin-bottom: 20px;
`

const ContenedorButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1rem;
    margin-bottom: 36px;
    margin-top: 10px;
    
    @media (min-width: 1440px){
        grid-template-columns: repeat(3,1fr);
    }
`

const Formulario = ({ setValue }) => {

    const [amount, setAmount] = useState('');
    const [people, setPeople] = useState('');
    const [tip, setTip] = useState(0);

    const [errorAmount, setAmountError] = useState(false);
    const [errorPeople, setErrorPeople] = useState(false)
    

    useEffect(() => {
        if (amount <= 0 && typeof(amount) === 'number') {
            setAmountError(true)
            return
        }
        setAmountError(false)

        if (people <= 0 && typeof(people) === 'number') {
            setErrorPeople(true)
            return
        }
        setErrorPeople(false)

        if (tip === 0 || typeof (amount) !== 'number' || typeof (people) !== 'number') {
            return
        }

        const objectTip = {
            amount,
            people,
            tip
        }

        setValue(objectTip)
    }, [amount, people,tip])

    const setActive = (e) => {
      
        porcentajes.forEach(porcentaje => {
            if (porcentaje.etiqueta == e.target.innerHTML) {
                porcentaje.activo = true
            }
            else {
                porcentaje.activo = false
            }
        } )
    }

    const handleCustom = (e) => {
        const entrada = Number(e.target.value)
        const custom = (entrada / 100).toFixed(2)
        setTip(Number(custom))
    }

    return (    
        <div>
            <div className='d--flex'>
                <Label>Bill</Label>

                {
                    errorAmount &&
                    <Mensaje>Invalid Value</Mensaje>
                }
            </div>

            <input
                className={`input input-bill ${errorAmount ? 'input-error' : ''}`}
                type="number"
                min="0.0"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />

            <Label>Select Tip %</Label>
            <ContenedorButtons>
                {
                    porcentajes.map(porcentaje => (
                        <Boton
                            key={porcentaje.id}
                            value={porcentaje.valor}
                            etiqueta={porcentaje.etiqueta}
                            activo={porcentaje.activo}
                            setTip={setTip}
                            setActive={setActive}
                        />
                    ))
                }
                <div id='custom-tip'>
                    <input
                        type="number"
                        className='custom-tip'
                        placeholder='Custom'
                        onChange={handleCustom}
                    />
                </div>
            </ContenedorButtons>

            <div className='d--flex'>
                <Label>Number of people</Label>
                {

                    errorPeople &&
                    <Mensaje>Can't be zero</Mensaje>

                }
            </div>


            <input
                className={`input input-people ${errorPeople ? 'input-error' : ''}`}
                type="number"
                min="1"
                step=".01"
                placeholder="0"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
            />

        </div>
    )
}

export default Formulario