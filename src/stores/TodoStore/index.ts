import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import TodoService from '../../services/TodoService'

import TodoModel from '../models/TodoModel'
import { TodoObject } from '../types'

class TodoStore {
  todoService: TodoService
  @observable getTodoListAPIStatus!: APIStatus
  @observable getTodoListAPIError!: Error | null
  @observable todos!: Array<TodoModel>

  constructor(todoService: TodoService) {
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
  setTodoListResponse(response: Array<TodoObject> | null) {
    if (response) {
      this.todos = response.map(todo => {
        return new TodoModel(todo, this.todoService)
      })
    }
  }

  @action.bound
  getTodoList() {
    const getTodosPromise = this.todoService.getTodosAPI()
    return bindPromiseWithOnSuccess(getTodosPromise)
      .to(this.setGetTodoListAPIStatus, this.setTodoListResponse)
      .catch(this.setGetTodoListAPIError)
  }

  @action.bound
  addNewTodo(todoInput) {
    const todoObject = {
      id: Math.random(),
      title: todoInput,
      isCompleted: false
    }
    const newTodo = new TodoModel(todoObject, this.todoService)
    this.todos.unshift(newTodo)
  }

  @computed
  get todosLeftCount() {
    return this.todos.filter(todo => !todo.isCompleted).length
  }
}

export default TodoStore
