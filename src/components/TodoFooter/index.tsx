import React, { Component } from 'react'
import { observer } from 'mobx-react'

type TodoFooterProps = {
  todosLeftCount: number
  todoLeft: string
}

@observer
class TodoFooter extends Component<TodoFooterProps> {
  render() {
    const { todosLeftCount, todoLeft } = this.props
    return (
      <b>
        {`${todoLeft}:${todosLeftCount}`}
        {/* {`Todos Left:${todosLeftCount}`} */}
      </b>
    )
  }
}

export default TodoFooter
