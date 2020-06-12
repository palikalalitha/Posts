import React, { Component } from 'react'

import { observer } from 'mobx-react'

import NoDataView from '../../common/NoDataView'

import Todo from '../Todo'

import { TodosListWrapper } from './styledComponents'

@observer
class TodoList extends Component {
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

export default TodoList
