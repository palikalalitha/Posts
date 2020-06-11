import { observable, action } from 'mobx'
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
      return new Todo(todo)
    })
  }

  @action.bound
  getTodoList() {
    const getTodosPromise = this.todoService.getTodos()
    return bindPromiseWithOnSuccess(getTodosPromise)
      .to(this.setGetTodoListAPIStatus, this.setTodoListResponse)
      .catch(this.setGetTodoListAPIError)
  }
}

export default TodoStore
