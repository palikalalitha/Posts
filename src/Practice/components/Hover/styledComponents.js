import styled from '@emotion/styled'
import tw from 'tailwind.macro'
export const Box = styled.div`
  ${tw`bg-red-300 flex p-10`} /* display:flex; */
`

export const Text = styled.div`
  ${tw`bg-black w-48 h-48 m-2`} :hover {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: white;
    width: 250px;
    height: 250px;
    /* &::before {
      content: '◀';
    } */
  }
`

export const Image = styled.img`
  ${tw``}
  width:200px;
  height: 200px;
`

export const HoverBox = styled.p``
