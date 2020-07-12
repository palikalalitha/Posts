import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import OutlineButton from '../OutlineButton/OutlineButton'

export const FilledButtonStyles = styled(OutlineButton)`
  background-color:blue;
  color:white
  border-radius: ${props =>
    props.buttonShape === 'rectangle' ? '0px' : '10px'};
`
