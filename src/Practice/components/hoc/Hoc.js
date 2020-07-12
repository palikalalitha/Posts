import React, { Component } from 'react'

export default function Hoc(HocComponent) {
  return class extends Component {
    render() {
      console.log('hoc')
      return (
        <div>
          <h1>hiii</h1>
          <HocComponent></HocComponent>
        </div>
      )
    }
  }
}

export function HocWithFunction(HocComponent) {
  {
    const WrappedComponent = () => <HocComponent>dfg</HocComponent>
    return WrappedComponent
  }
}
