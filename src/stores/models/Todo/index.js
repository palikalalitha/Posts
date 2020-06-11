import { observable } from 'mobx'

class Todo {
  id
  @observable title
  @observable isCompleted

  constructor(todo) {
    this.id = todo.id
    this.title = todo.title
    this.isCompleted = todo.isCompleted
  }
}

export default Todo
