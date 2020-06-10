import React, { Component } from 'react'

class SvgWrapper extends Component {
  render() {
    const { renderComponent: RenderComponent, ...other } = this.props
    return <RenderComponent {...other} />
  }
}

export default SvgWrapper
