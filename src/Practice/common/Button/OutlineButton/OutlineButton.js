import React, { Component } from 'react'
import { ButtonStyles } from './styledComponent'

class OutlineButton extends Component {
  render() {
    const { buttonShape, buttonText, onClickHandler, className } = this.props
    return (
      //  <BaseButton {...this.props} />
      <ButtonStyles
        buttonShape={buttonShape}
        onClick={onClickHandler}
        className={className}
      >
        {buttonText}
      </ButtonStyles>
    )
  }
}

export default OutlineButton
