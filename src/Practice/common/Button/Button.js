import React, { Component } from 'react'
import OutlineButton from './OutlineButton/OutlineButton'
import FilledButton from './FilledButton/FilledButton'

class Button extends Component {
  render() {
    console.log(this.props.buttonType)

    const {
      buttonType,
      buttonShape,
      onClickHandler,
      buttonText,
      className
    } = this.props
    switch (buttonType) {
      case 'outline':
        return (
          <OutlineButton
            buttonShape={buttonShape}
            onClickHandler={onClickHandler}
            buttonText={buttonText}
            className={className}
          />
        )
      case 'filled':
        return (
          <FilledButton
            buttonShape={buttonShape}
            onClickHandler={onClickHandler}
            buttonText={buttonText}
          />
        )
    }
  }
}

export default Button
