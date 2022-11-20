// Style your elements here

import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  border-radius: 7px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  font-family: Roboto;
  margin: 15px;
  border-width: 0px;
  color: #00c9b7;
  font-weight: bold;
  opacity: ${props => props.op};
`
