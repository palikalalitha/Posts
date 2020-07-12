import React, { Component } from 'react'
import { SampleButton } from './Samplebutton'

class ForwardingRef extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  render() {
    return (
      <div>
        <p>Forwrading ref </p>
        <SampleButton ref={this.ref}>Click me!</SampleButton>
      </div>
    )
  }
}

export default ForwardingRef
