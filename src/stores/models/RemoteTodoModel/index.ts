import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

type TodoObject = {
  id: string
  isCompleted: boolean
  title: string
}

class Todo {
  id: string
  @observable title: string
  @observable isCompleted: boolean

  todoService

  @observable updateCompletionAPIStatus: APIStatus
  @observable updateCompletionAPIError: any

  constructor(todo: TodoObject, todoService: any) {
    this.id = todo.id
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
      is_completed: this.isCompleted
    }
    const updateTodoCompletionPromise = this.todoService.updateTodoCompletion(
      todoCompletionRequest
    )
    return bindPromiseWithOnSuccess(updateTodoCompletionPromise)
      .to(this.setUpdateCompletionAPIStatus, () => {})
      .catch(this.setUpdateCompletionAPIError)
  }
}

export default Todo
