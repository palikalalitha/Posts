// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'
import EmojiService from '../services/EmojiService/index.fixture'

import TodoStore from './TodoStore'
import EmojiStore from './EmojiStore'

const todoStore = new TodoStore(new TodoService())
const emojiStore = new EmojiStore(new EmojiService())

const stores = {
  todoStore,
  emojiStore
}

export default stores
