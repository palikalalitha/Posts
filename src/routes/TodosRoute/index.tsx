import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withTranslation, WithTranslation } from 'react-i18next'
import { SAMPLE_ROUTE_PATH } from '../../constants/NavigationConstants'
import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'

import TodoList from '../../components/TodoList'
import UserInput from '../../components/UserInput'
import TodoFooter from '../../components/TodoFooter'

import TodoStore from '../../stores/TodoStore'

import { TodosWrapper, RefDemoButton } from './styledComponents'
import { API_SUCCESS } from '@ib/api-constants'

interface TodosRouteProps extends RouteComponentProps, WithTranslation {}

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
    const todoStore = this.getTodoStore()
    const { getTodoListAPIStatus } = todoStore
    if (getTodoListAPIStatus !== API_SUCCESS) {
      this.getTodoStore().getTodoList()
    }
  }

  onAddTodo = (todoInput: string) => {
    this.getTodoStore().addNewTodo(todoInput)
  }

  getCurrentTodo = () => {
    const userInput = this.todoInputRef.current?.getUserInput()
    if (userInput) {
      this.onAddTodo(userInput)
    }
    const { history } = this.props
    history.push(SAMPLE_ROUTE_PATH)
  }
  changeLang = () => {}

  renderSuccessUI = observer(() => {
    const { t } = this.props
    const { todos, todosLeftCount } = this.getTodoStore()
    return (
      <TodosWrapper>
        <RefDemoButton onClick={this.getCurrentTodo}>
          {t('todos:addCurrentTodo')}
        </RefDemoButton>
        <RefDemoButton onClick={this.changeLang}>
          Change Language to hindhi
        </RefDemoButton>
        <UserInput
          ref={this.todoInputRef}
          onAddInput={this.onAddTodo}
          buttonText={t('todos:addTodo')}
        />
        <TodoList todos={todos} todoTitle={t('todos:todoTitle')} />
        <TodoFooter
          todosLeftCount={todosLeftCount}
          todoLeft={t('todos:todosLeft', { count: todosLeftCount })}
        />
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

export default withRouter(
  withTranslation('translation', { withRef: true })(TodosRoute)
)
