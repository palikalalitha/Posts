import React, { Component } from 'react'

import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { create } from 'apisauce'

import { TodosWrapper, TodoItem } from './styledComponents'

@observer
class NetworkCallsRoute extends Component {
  @observable todos = []

  componentDidMount() {
    this.getTodosUsingFetchPromiseAsyncAwait()
  }

  @action.bound
  setTodosResponse = todos => {
    this.todos = todos
  }

  getTodosUsingFetchPromiseThen = () => {
    fetch('https://user-todo-list.getsandbox.com/todos')
      .then(response => response.json())
      .then(todos => {
        this.setTodosResponse(todos)
        console.log('Fetch todos response promise then ', todos, todos.length)
      })
      .catch(error => console.log('Fetch error'))
  }

  getTodosUsingFetchPromiseAsyncAwait = async () => {
    try {
      const response = await fetch(
        'https://user-todo-list.getsandbox.com/todos'
      )
      const todos = await response.json()
      this.setTodosResponse(todos)
      console.log('Fetch todos response async await ', todos.length, todos)
    } catch (error) {
      console.log('Fetch error', error)
    }
  }

  getTodosUsingApiSaucePromiseThen = () => {
    const api = create({
      baseURL: 'https://user-todo-list.getsandbox.com',
      headers: { Accept: 'application/json' }
    })

    api
      .get('/todos')
      .then(response => response.data)
      .then(todos => {
        this.setTodosResponse(todos)
        console.log(
          'Apisauce todos response promise then ',
          todos,
          todos.length
        )
      })
  }

  getTodosUsingApiSaucePromiseAsyncAwait = async () => {
    const api = create({
      baseURL: 'https://user-todo-list.getsandbox.com',
      headers: { Accept: 'application/json' }
    })
    const response = api.get('/todos')
    const todos = response.data
    this.setTodosResponse(todos)
    console.log('Api Sauce todos response async await ', todos.length, todos)
  }

  render() {
    return (
      <TodosWrapper>
        {this.todos.map(todo => {
          return <TodoItem key={todo.id}>{todo.title}</TodoItem>
        })}
      </TodosWrapper>
    )
  }
}

export default NetworkCallsRoute
