import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const ButtonStyles = styled.button`
  ${tw`w-32`}
  border:1px solid black;

  border-radius: ${props =>
    props.buttonShape === 'rectangle' ? '0px' : '10px'};
`
