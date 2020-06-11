import React, { Component } from 'react'

class TodoFilters extends Component {
  onChangeSelectedFilter = e => {
    this.props.onChangeSelectedFilter(e.target.id)
  }

  render() {
    const { selectedFilter } = this.props
    return (
      <div className='filter-container'>
        <button
          id='All'
          className={
            selectedFilter === 'All' ? 'selected-filter-btn' : 'filter-btn'
          }
          onClick={this.onChangeSelectedFilter}
        >
          All
        </button>
        <button
          id='Active'
          className={
            selectedFilter === 'Active' ? 'selected-filter-btn' : 'filter-btn'
          }
          onClick={this.onChangeSelectedFilter}
        >
          Active
        </button>
        <button
          id='Completed'
          className={
            selectedFilter === 'Completed'
              ? 'selected-filter-btn'
              : 'filter-btn'
          }
          onClick={this.onChangeSelectedFilter}
        >
          Completed
        </button>
        <button
          className='filter-btn'
          onClick={this.props.onClickClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    )
  }
}

export default TodoFilters
