import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import TodoList from '../../components/RemoteTodos/TodoList'
import UserInput from '../../components/RemoteTodos/UserInput'
import TodoFooter from '../../components/RemoteTodos/TodoFooter'

import { TodosWrapper } from './styledComponents'

@inject('remoteTodoStore')
@observer
class RemoteTodosRoute extends Component {
  componentDidMount() {
    this.getTodos()
  }

  getTodoStore = () => {
    return this.props.remoteTodoStore
  }

  getTodos = () => {
    this.getTodoStore().getTodoList()
  }

  onAddTodo = todoInput => {
    this.getTodoStore().addNewTodo(todoInput)
  }

  renderSuccessUI = observer(() => {
    const { todos, todosLeftCount } = this.getTodoStore()
    return (
      <TodosWrapper>
        <UserInput onAddTodo={this.onAddTodo} />
        <TodoList todos={todos} />
        <TodoFooter todosLeftCount={todosLeftCount} />
      </TodosWrapper>
    )
  })

  render() {
    const { getTodoListAPIStatus, getTodoListAPIError } = this.getTodoStore()
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

export default RemoteTodosRoute
