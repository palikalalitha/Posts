import React, { Component } from 'react'

const style1 = { background: 'red', fontSize: 14 }
const style2 = { background: 'green', fontSize: 16 }

const styles = {
  style1,
  style2
}

class UserInput extends Component {
  state = {
    userInput: ''
  }

  onChange = e => {
    const input = e.target.value
    this.setState({
      userInput: input
    })
  }

  onSubmit = e => {
    // TODO: Check for empty todo submission

    this.props.onSubmitTodo(this.state.userInput)
    e.preventDefault()
    this.setState({
      userInput: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          onChange={this.onChange}
          value={this.state.userInput}
          className='border-black border-solid border-2 h-10 mb-4'
        />
        <input
          type='submit'
          value='Add Todo'
          className='bg-blue-500 rounded p-2 ml-2 text-white'
        />
      </form>
    )
  }
}

export default UserInput
