// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  background-image: linear-gradient(
    to ${props => props.dir},
    ${props => props.color1},
    ${props => props.color2}
  );
  background-size: cover;
  //   display:flex;
  //   flex-direction:column:
  //   justify-content:center;
  //   align-items:center;
  text-align: center;
`
export const Heading = styled.h1`
  color: #ffffffff;
  font-family: Roboto;
  text-align: center;
  align-self: center;
  display: block;
`

export const Description = styled.p`
  color: #ffffff79;
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
  display: block;
  padding: 20px;
`
export const SUB = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
