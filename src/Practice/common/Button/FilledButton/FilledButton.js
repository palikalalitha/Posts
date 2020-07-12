import React, { Component } from 'react'
import { FilledButtonStyles } from './styledComponent'

class FilledButton extends Component {
  render() {
    const { buttonShape, buttonText, onClickHandler } = this.props
    return (
      <FilledButtonStyles buttonShape={buttonShape} onClick={onClickHandler}>
        {buttonText}
      </FilledButtonStyles>
    )
  }
}

export default FilledButton
