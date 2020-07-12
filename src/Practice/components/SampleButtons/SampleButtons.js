import React, { Component } from 'react'
import Button from '../../common/Button/Button'

class SampleButtons extends Component {
  render() {
    console.log('sample')
    return (
      <div>
        <Button
          buttonType='outline'
          buttonShape='round'
          onClickHandler={this.onClick}
          buttonText='Outline'
        />
        <Button
          buttonType='filled'
          buttonShape='rectangle'
          onClickHandler={this.onClick}
          buttonText='submit'
        />
        <Button
          buttonType='outline'
          buttonShape='rectangle'
          onClickHandler={this.onClick}
          buttonText='click me'
        />
      </div>
    )
  }
}

export default SampleButtons
