// Write your code here

import {Button} from './styledComponents'

const GradientDirectionsItem = props => {
  const {details, transferId, isActive} = props

  const op = isActive ? 1 : 0.5

  const changeActiveBtn = () => {
    transferId(details.value)
  }
  return (
    <li>
      <Button type="button" onClick={changeActiveBtn} op={op}>
        {details.displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionsItem
