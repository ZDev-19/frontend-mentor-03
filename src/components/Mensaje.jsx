import styled from '@emotion/styled'

const Texto = styled.p`
  color: #FF0000;
`

const Mensaje = ({children}) => {
  return (
      <Texto>{children}</Texto>
  )
}

export default Mensaje