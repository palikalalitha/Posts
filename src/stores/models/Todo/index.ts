import { observable, action } from 'mobx'

type TodoObject = {
  id: string
  isCompleted: boolean
  title: string
}

class Todo {
  id: string
  @observable title: string
  @observable isCompleted: boolean

  constructor(todo: TodoObject, todoService) {
    this.id = todo.id
    this.title = todo.title
    this.isCompleted = todo.isCompleted
  }

  @action
  toggleCompleted(): void {
    this.isCompleted = !this.isCompleted
  }
}

export default Todo
