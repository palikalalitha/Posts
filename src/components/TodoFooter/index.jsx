import React, { Component } from 'react'

import TodoFilters from '../TodoFilters'

const ActiveTodosCount = ({ count }) => {
  return <span className='mr-2'>{`${count} left`}</span>
}

class TodoFooter extends Component {
  render() {
    return (
      <div className='footer-container'>
        <ActiveTodosCount count={this.props.activeTodosCount} />
        <TodoFilters
          selectedFilter={this.props.selectedFilter}
          onChangeSelectedFilter={this.props.onChangeSelectedFilter}
          onClickClearCompleted={this.props.onClickClearCompleted}
        ></TodoFilters>
      </div>
    )
  }
}

export default TodoFooter
