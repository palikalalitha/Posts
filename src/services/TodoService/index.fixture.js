import getTodosResponse from '../../fixtures/getTodosResponse.json'

class TodoFixtureService {
  getTodos() {
    return new Promise(resolve => {
      resolve(getTodosResponse)
    })
  }
}

export default TodoFixtureService
