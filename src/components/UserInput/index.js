import React, { Component } from 'react'

import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

@observer
class UserInput extends Component {
  @observable todoInput = ''

  onChange = event => {
    const input = event.target.value
    this.updateTodo(input)
  }

  @action
  updateTodo(updatedContent) {
    this.todoInput = updatedContent
  }

  onAddTodo = () => {
    if (this.todoInput) {
      const { onAddTodo } = this.props
      onAddTodo(this.todoInput)
      this.updateTodo('')
    } else {
      alert('Can not add empty todo')
    }
  }

  onKeyDown = event => {
    if (event.keyCode == 13) {
      this.onAddTodo()
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.todoInput}
          className='border-black border-solid border-2 h-10 mb-4 p-2'
        />
        <button
          onClick={this.onAddTodo}
          className='bg-blue-500 rounded p-2 ml-2 text-white'
        >
          Add Todo
        </button>
      </div>
    )
  }
}

export default UserInput
