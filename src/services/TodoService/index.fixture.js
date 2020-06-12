import getTodosResponse from '../../fixtures/getTodosResponse.json'

class TodoFixtureService {
  getTodos() {
    return new Promise(resolve => {
      resolve(getTodosResponse)
    })
  }

  updateTodoCompletion() {
    return new Promise(resolve => {
      resolve({})
    })
  }
}

export default TodoFixtureService
