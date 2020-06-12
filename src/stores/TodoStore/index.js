import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

import Todo from '../models/Todo'

class TodoStore {
  todoService
  @observable getTodoListAPIStatus
  @observable getTodoListAPIError
  @observable todos

  constructor(todoService) {
    this.todoService = todoService
    this.init()
  }

  @action.bound
  init() {
    this.getTodoListAPIStatus = API_INITIAL
    this.getTodoListAPIError = null
    this.todos = []
  }

  @action.bound
  setGetTodoListAPIStatus(status) {
    this.getTodoListAPIStatus = status
  }

  @action.bound
  setGetTodoListAPIError(error) {
    this.getTodoListAPIError = error
  }

  @action.bound
  setTodoListResponse(response) {
    this.todos = response.map(todo => {
      return new Todo(todo, this.todoService)
    })
  }

  @action.bound
  getTodoList() {
    const getTodosPromise = this.todoService.getTodos()
    return bindPromiseWithOnSuccess(getTodosPromise)
      .to(this.setGetTodoListAPIStatus, this.setTodoListResponse)
      .catch(this.setGetTodoListAPIError)
  }

  @action.bound
  addNewTodo(todoInput) {
    const todoObject = {
      id: Math.random.toString(),
      title: todoInput,
      isCompleted: false
    }
    const newTodo = new Todo(todoObject)
    this.todos.unshift(newTodo)
  }

  @computed
  get todosLeftCount() {
    return this.todos.filter(todo => todo.isCompleted).length
  }
}

export default TodoStore
