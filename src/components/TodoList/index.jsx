import React, { Component } from 'react'

import NoDataView from '../common/NoDataView'

import Todo from '../Todo'

class TodoList extends Component {
  render() {
    const {
      todos,
      onChangeTodoCheckbox,
      onRemoveSelectedTodo,
      onChangeTodoContent
    } = this.props
    if (todos.length === 0) return <NoDataView />

    return (
      <div>
        {todos.map(eachTodo => {
          return (
            <Todo
              key={eachTodo.id}
              {...eachTodo}
              onChangeTodoCheckbox={onChangeTodoCheckbox}
              onRemoveSelectedTodo={onRemoveSelectedTodo}
              onChangeTodoContent={onChangeTodoContent}
            />
          )
        })}
      </div>
    )
  }
}

export default TodoList
