import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import ForwardingRef from '../ForwardingRef/ForwardingRef'
import Hoc, { HocWithFunction } from '../hoc/Hoc'
import { SampleButton } from '../ForwardingRef/Samplebutton'
import SampleButtons from '../SampleButtons/SampleButtons'
import Hover from '../Hover/Hover'
class Practice extends Component {
  constructor(props) {
    super(props)

    this.myInput = React.createRef()
    this.myVideo = React.createRef()

    this.textInput = null
    this.setTextInputRef = element => {
      this.textInput = element
    }

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus()
    }
  }

  componentDidMount() {
    this.focusTextInput()
  }
  render() {
    console.log('practice')
    return (
      <div>
        <Hover />
        <div style={{ margin: '20px' }}>
          <h1>Sample Buttons </h1>
          <SampleButtons />
        </div>
        <div style={{ margin: '20px' }}>
          <h1 style={{ margin: '10px' }}>Ref Practice</h1>
          <input type='text' ref={this.setTextInputRef} />
          <input
            type='button'
            value='Focus the text input'
            onClick={this.focusTextInput}
          />
        </div>
        <input ref={this.myInput} />
        <button
          onClick={() => {
            console.log(this.myInput)
            this.myInput.current.focus()
          }}
        >
          focus!
        </button>
        <video ref={this.myVideo} width='320' height='176' controls>
          <source
            src='https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/Screen_Recording_2019-11-06_at_4.14.52_PM.mp4'
            type='video/mp4'
          />
        </video>
        <div>
          <button
            onClick={() => {
              console.log(this.myVideo)
              this.myVideo.current.play()
            }}
          >
            Play
          </button>
          <button
            onClick={() => {
              this.myVideo.current.pause()
            }}
          >
            Pause
          </button>
        </div>
        <ForwardingRef />
      </div>
    )
  }
}
Practice = HocWithFunction(Practice)
export default Practice
