import React, { useState, useEffect } from 'react'

import TodoAddForm from '../components/todo/TodoAddForm'
//import TodoItem from './components/TodoItem'
//import MainContent from './components/MainContent'
import TodoList from '../components/todo/TodoList'
import MyBreadcrumb from '../components/MyBreadcrumb'

function TodoApp(props) {
  return (
    <>
      <MyBreadcrumb />
      <TodoAddForm />
      <TodoList />
    </>
  )
}

export default TodoApp
