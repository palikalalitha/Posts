import React, { Component } from 'react'
import { observer } from 'mobx-react'

import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure'
import TodoFooter from '../../components/TodoFooter'
import TodoList from '../../components/TodoList'
import UserInput from '../../components/UserInput'
import stores from '../../stores'

import './index.css'

@observer
class TodosApp extends Component {
  todoIdCounter = 0

  state = {
    todos: [],
    selectedFilter: 'All'
  }

  componentDidMount() {
    const {
      todoStore: { getTodoList }
    } = stores
    getTodoList()
  }

  onAddTodo = newTodoContent => {
    const newTodo = {
      id: this.todoIdCounter,
      title: newTodoContent,
      isCompleted: false
    }

    const previousTodos = this.state.todos.slice(0)
    previousTodos.push(newTodo)
    this.setState({
      todos: previousTodos
    })

    this.increamentTodoCounter()
  }

  increamentTodoCounter = () => {
    this.todoIdCounter = this.todoIdCounter + 1
  }

  onChangeSelectedFilter = selectedFilter => {
    this.setState({
      selectedFilter: selectedFilter
    })
  }

  onCompleteTodo = (id, checked) => {
    const previousTodos = this.state.todos.slice(0)
    const findSelectedTodo = previousTodos.find(eachTodo => eachTodo.id === id)
    findSelectedTodo.isCompleted = checked

    this.setState({
      todos: previousTodos
    })
  }

  onRemoveTodo = id => {
    const previousTodos = this.state.todos.slice(0)
    const updatedTodos = previousTodos.filter(eachTodo => eachTodo.id !== id)
    this.setState({
      todos: updatedTodos
    })
  }

  getFilteredTodos = () => {
    const { todos, selectedFilter } = this.state
    let filteredTodos = []
    if (selectedFilter === 'Completed') {
      filteredTodos = todos.filter(eachTodo => eachTodo.isCompleted)
    } else if (selectedFilter === 'Active') {
      filteredTodos = todos.filter(eachTodo => !eachTodo.isCompleted)
    } else {
      filteredTodos = todos
    }
    return filteredTodos
  }

  getActiveTodosCount = () => {
    const { todos } = this.state

    return todos.filter(eachTodo => !eachTodo.isCompleted).length
  }

  onClearCompleted = () => {
    const { todos } = this.state
    let activeTodos = todos.filter(eachTodo => !eachTodo.isCompleted)
    this.setState({ todos: activeTodos })
  }

  onUpdateTodoTitle = (id, todoContent) => {
    const previousTodos = this.state.todos.slice(0)
    const findSelectedTodo = previousTodos.find(eachTodo => eachTodo.id === id)
    findSelectedTodo.title = todoContent

    this.setState({
      todos: previousTodos
    })
  }

  renderSuccessUI = () => {
    const { todos } = stores.todoStore
    return (
      <div className='main-container'>
        <UserInput onSubmitTodo={this.onAddTodo} />
        <TodoList
          todos={todos}
          onChangeTodoCheckbox={this.onCompleteTodo}
          onRemoveSelectedTodo={this.onRemoveTodo}
          onChangeTodoContent={this.onUpdateTodoTitle}
        />
        <TodoFooter
          selectedFilter={this.state.selectedFilter}
          onChangeSelectedFilter={this.onChangeSelectedFilter}
          activeTodosCount={this.getActiveTodosCount()}
          onClickClearCompleted={this.onClearCompleted}
        />
      </div>
    )
  }

  // TODO: Change all the react state to mobx state
  // Using todos from TodoStore
  render() {
    const {
      getTodoListAPIStatus,
      getTodoListAPIError,
      getTodoList
    } = stores.todoStore
    return (
      <LoadingWrapperWithFailure
        apiStatus={getTodoListAPIStatus}
        apiError={getTodoListAPIError}
        onRetry={getTodoList}
        renderSuccessUI={this.renderSuccessUI}
        containerStyles={{ height: '100vh' }}
      />
    )
  }
}

export default TodosApp
