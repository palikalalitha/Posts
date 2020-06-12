import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import TodoList from '../../components/TodoList'
import UserInput from '../../components/UserInput'
import TodoFooter from '../../components/TodoFooter'

import { TodosWrapper } from './styledComponents'

@inject('todoStore')
@observer
class TodosApp extends Component {
  componentDidMount() {
    this.getTodos()
  }

  getTodos = () => {
    const { todoStore } = this.props
    todoStore.getTodoList()
  }

  onAddTodo = todoInput => {
    const { todoStore } = this.props
    todoStore.addNewTodo(todoInput)
  }

  renderSuccessUI = observer(() => {
    const { todos, todosLeftCount } = this.props.todoStore
    return (
      <TodosWrapper>
        <UserInput onAddTodo={this.onAddTodo} />
        <TodoList todos={todos} />
        <TodoFooter todosLeftCount={todosLeftCount} />
      </TodosWrapper>
    )
  })

  render() {
    const { getTodoListAPIStatus, getTodoListAPIError } = this.props.todoStore
    return (
      <LoadingWrapperWithFailure
        apiStatus={getTodoListAPIStatus}
        apiError={getTodoListAPIError}
        onRetry={this.getTodos}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default TodosApp
