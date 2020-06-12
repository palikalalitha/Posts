import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class TodoFooter extends Component {
  render() {
    const { todosLeftCount } = this.props
    return <b>{`Todos Left:${todosLeftCount}`}</b>
  }
}

export default TodoFooter
