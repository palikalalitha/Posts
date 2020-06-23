import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../utils/APIUtils'

import { apiMethods } from '../../constants/APIConstants'

import { TODO_BASE_URL } from '../../constants/EnvironmentConstants'

import endpoints from '../endpoints'

import TodoService from './index'

class TodoAPIService implements TodoService {
  api: Record<string, any>

  constructor() {
    this.api = create({
      baseURL: TODO_BASE_URL
    })
  }

  async getTodosAPI() {
    return networkCallWithApisauce(
      this.api,
      endpoints.todos.todoList,
      {},
      apiMethods.get
    )
  }

  async updateTodoCompletionAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endpoints.todos.updateCompletion,
      requestObject,
      apiMethods.post
    )
  }
}

export default TodoAPIService
