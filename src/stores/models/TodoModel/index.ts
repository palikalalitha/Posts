import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import TodoService from '../../../services/TodoService'

import { TodoObject } from '../../types'

class TodoModel {
  id: string
  @observable title: string
  @observable isCompleted: boolean

  todoService: TodoService

  @observable updateCompletionAPIStatus: APIStatus
  @observable updateCompletionAPIError: Error | null

  constructor(todo: TodoObject, todoService: TodoService) {
    this.id = todo.id.toString()
    this.title = todo.title
    this.isCompleted = todo.isCompleted
    this.todoService = todoService

    this.updateCompletionAPIStatus = API_INITIAL
    this.updateCompletionAPIError = null
  }

  @action
  toggleCompleted(): void {
    this.isCompleted = !this.isCompleted
    this.updateTodoCompletion()
  }

  @action.bound
  setUpdateCompletionAPIStatus(status) {
    this.updateCompletionAPIStatus = status
  }

  @action.bound
  setUpdateCompletionAPIError(error) {
    this.updateCompletionAPIError = error
    this.isCompleted = !this.isCompleted
  }

  @action.bound
  updateTodoCompletion() {
    const todoCompletionRequest = {
      id: this.id,
      is_completed: this.isCompleted
    }
    const updateTodoCompletionPromise = this.todoService.updateTodoCompletionAPI(
      todoCompletionRequest
    )
    return bindPromiseWithOnSuccess(updateTodoCompletionPromise)
      .to(this.setUpdateCompletionAPIStatus, () => {})
      .catch(this.setUpdateCompletionAPIError)
  }
}

export default TodoModel
