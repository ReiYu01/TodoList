import React from 'react'

import TodoAddForm from '../components/todo/TodoAddForm'
import TodoList from '../components/todo/TodoList'

function TodoApp(props) {
  return (
    <>
      <TodoAddForm />
      <TodoList />
    </>
  )
}

export default TodoApp
