import React, { Component } from 'react'

class Todo extends Component {
  onChangeTodoCheckbox = e => {
    const { id } = this.props
    this.props.onChangeTodoCheckbox(id, e.target.checked)
  }

  onChangeTodoContent = e => {
    const { id } = this.props
    this.props.onChangeTodoContent(id, e.target.value)
  }

  onRemoveSelectedTodo = () => {
    const { id } = this.props
    this.props.onRemoveSelectedTodo(id)
  }

  render() {
    const { title, isCompleted } = this.props
    return (
      <div>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={this.onChangeTodoCheckbox}
        />
        <input type='text' value={title} onChange={this.onChangeTodoContent} />
        <button onClick={this.onRemoveSelectedTodo}>Remove Todo</button>
      </div>
    )
  }
}

export default Todo
