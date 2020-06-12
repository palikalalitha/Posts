// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'

import TodoStore from './TodoStore'

const todoStore = new TodoStore(new TodoService())

const stores = {
  todoStore
}

export default stores
