import React, { Component } from 'react'
import { reaction } from 'mobx'

import { observer } from 'mobx-react'

import TodoModel from '../../../stores/models/Todo'

import { TodoWrapper, TodoItem } from './styledComponents'
import { API_SUCCESS, API_FAILED } from '@ib/api-constants'
import { getFormattedErrorDescription } from '../../../utils/APIUtils'

type TodoProps = {
  todo: TodoModel
}

@observer
class Todo extends Component<TodoProps> {
  onChangeCompletion = () => {
    const { todo } = this.props
    todo.toggleCompleted()
  }

  todoCompletionFailureReaction = reaction(
    () => {
      const { todo } = this.props
      return todo.updateCompletionAPIStatus === API_FAILED
    },
    isCompletionFailed => {
      if (isCompletionFailed) {
        const { todo } = this.props
        const errorMessage = getFormattedErrorDescription(
          todo.updateCompletionAPIError
        )
        alert(errorMessage)
      }
    }
  )

  componentWillUnmount() {
    this.todoCompletionFailureReaction()
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
        <TodoItem onClick={this.onChangeCompletion}>{title}</TodoItem>
      </TodoWrapper>
    )
  }
}

export default Todo
