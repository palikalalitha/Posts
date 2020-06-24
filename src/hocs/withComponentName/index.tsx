import React from 'react'

import { HOCWrapper, ComponentName } from './styledComponents'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function withComponentNameClassComponent<T>(
  WrappedComponent: React.ComponentType<T>
) {
  return class extends React.Component<T> {
    render() {
      const props = this.props as T
      return (
        <HOCWrapper>
          <ComponentName>{getDisplayName(WrappedComponent)}</ComponentName>
          <WrappedComponent {...props} />
        </HOCWrapper>
      )
    }
  }
}

function withComponentNameFunctionalComponent<T>(
  WrappedComponent: React.ComponentType<T>
) {
  const functionalComponent = (props: T) => (
    <HOCWrapper>
      <ComponentName>{getDisplayName(WrappedComponent)}</ComponentName>
      <WrappedComponent {...props} />
    </HOCWrapper>
  )
  return functionalComponent
}

export default withComponentNameFunctionalComponent
