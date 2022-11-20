import {Component} from 'react'
import {BgContainer, Heading, Description, SUB} from './styledComponents'
import GradientDirectionsItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    c1: '#8ae323',
    c2: '#014f7b',
  }

  colorOneChange = event => {
    this.setState({color1: event.target.value})
  }

  changeActiveId = id => {
    this.setState({activeDirection: id})
  }

  colorTwoChange = event => {
    this.setState({color2: event.target.value})
  }

  generate = () => {
    const {color1, color2} = this.state
    this.setState({c1: color1, c2: color2})
  }

  render() {
    const {c1, c2, activeDirection} = this.state

    return (
      <>
        <BgContainer
          dir={activeDirection}
          color1={c1}
          color2={c2}
          data-testid="gradientGenerator"
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <ul>
            {gradientDirectionsList.map(each => (
              <GradientDirectionsItem
                details={each}
                key={each.directionId}
                transferId={this.changeActiveId}
                isActive={each.value === activeDirection}
              />
            ))}
          </ul>
          <Description>Pick the Colors</Description>
          <SUB>
            <ul>
              <li>
                <Description>{c1}</Description>
              </li>
              <li>
                <Description>{c2}</Description>
              </li>
            </ul>
          </SUB>
          <SUB>
            <input type="color" onChange={this.colorOneChange} />
            <input type="color" onChange={this.colorTwoChange} />
          </SUB>
          <button type="button" onClick={this.generate}>
            Generate
          </button>
        </BgContainer>
      </>
    )
  }
}

export default GradientGenerator
