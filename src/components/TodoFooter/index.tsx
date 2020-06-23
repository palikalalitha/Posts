import React, { Component } from 'react'
import { observer } from 'mobx-react'

type TodoFooterProps = {
  todosLeftCount: number
}

@observer
class TodoFooter extends Component<TodoFooterProps> {
  render() {
    const { todosLeftCount } = this.props
    return <b>{`Todos Left:${todosLeftCount}`}</b>
  }
}

export default TodoFooter
