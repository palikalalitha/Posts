import { TodoObject, UpdateCompletionStatusRequest } from '../../stores/types'

interface TodoService {
  getTodosAPI: () => Promise<Array<TodoObject>>

  updateTodoCompletionAPI: (
    requestObject: UpdateCompletionStatusRequest
  ) => Promise<{}>
}

export default TodoService
