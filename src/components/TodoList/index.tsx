import React, { Component } from 'react'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import { observer } from 'mobx-react'

import withComponentName from '../../hocs/withComponentName'

import NoDataView from '../common/NoDataView'

import TodoModel from '../../stores/models/TodoModel'

import Todo from '../Todo'

import { TodosListWrapper } from './styledComponents'

interface TodoListProps extends RouteComponentProps {
  todos: Array<TodoModel>
}

@observer
class TodoList extends Component<TodoListProps> {
  render() {
    const { todos } = this.props

    if (todos.length === 0) {
      return <NoDataView />
    }
    return (
      <TodosListWrapper>
        {todos.map(todoItem => {
          return <Todo key={todoItem.id} todo={todoItem} />
        })}
      </TodosListWrapper>
    )
  }
}

export default withRouter(withComponentName(TodoList))
