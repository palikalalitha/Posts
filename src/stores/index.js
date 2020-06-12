// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'
import EmojiService from '../services/EmojiService/index.fixture'

import RemoteTodoStore from './RemoteTodoStore'
import EmojiStore from './EmojiStore'

const remoteTodoStore = new RemoteTodoStore(new TodoService())
const emojiStore = new EmojiStore(new EmojiService())

const stores = {
  remoteTodoStore,
  emojiStore
}

export default stores
