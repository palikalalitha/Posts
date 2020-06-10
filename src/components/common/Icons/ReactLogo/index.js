import React, { Component } from 'react'
import SvgWrapper from '../../SvgWrapper'
import SvgFile from './SvgFile'

class ReactLogo extends Component {
  render() {
    return <SvgWrapper renderComponent={SvgFile} {...this.props} />
  }
}

export default ReactLogo
