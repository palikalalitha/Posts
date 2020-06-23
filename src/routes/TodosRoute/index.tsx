import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import TodoList from '../../components/TodoList'
import UserInput from '../../components/UserInput'
import TodoFooter from '../../components/TodoFooter'

import TodoStore from '../../stores/TodoStore'

import { TodosWrapper, RefDemoButton } from './styledComponents'

interface TodosRouteProps {}

interface InjectedProps extends TodosRouteProps {
  todoStore: TodoStore
}

@inject('todoStore')
@observer
class TodosRoute extends Component<TodosRouteProps> {
  todoInputRef: React.RefObject<UserInput>

  constructor(props) {
    super(props)
    this.todoInputRef = React.createRef()
  }

  componentDidMount() {
    this.getTodos()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getTodoStore = () => {
    return this.getInjectedProps().todoStore
  }

  getTodos = () => {
    this.getTodoStore().getTodoList()
  }

  onAddTodo = (todoInput: string) => {
    this.getTodoStore().addNewTodo(todoInput)
  }

  getCurrentTodo = () => {
    const userInput = this.todoInputRef.current?.getUserInput()
    if (userInput) {
      this.onAddTodo(userInput)
    }
  }

  renderSuccessUI = observer(() => {
    const { todos, todosLeftCount } = this.getTodoStore()
    return (
      <TodosWrapper>
        <RefDemoButton onClick={this.getCurrentTodo}>
          Add current todo
        </RefDemoButton>
        <UserInput
          ref={this.todoInputRef}
          onAddInput={this.onAddTodo}
          buttonText='Add Todo'
        />
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

export default TodosRoute
