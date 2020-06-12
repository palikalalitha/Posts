import React, { Component } from 'react'
import { observer } from 'mobx-react'

import TodoModel from '../../stores/models/Todo'

import { TodoWrapper } from './styledComponents'

type TodoProps = {
  todo: TodoModel
}

@observer
class Todo extends Component<TodoProps> {
  onChangeCompletion = () => {
    const { todo } = this.props
    todo.toggleCompleted()
  }

  render() {
    const { todo } = this.props
    const { title, isCompleted } = todo
    return (
      <TodoWrapper>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={this.onChangeCompletion}
        />
        <p>{title}</p>
      </TodoWrapper>
    )
  }
}

export default Todo
