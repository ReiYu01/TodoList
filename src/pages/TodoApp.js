import React from 'react'
import { connect } from 'react-redux'

import TodoAddForm from '../components/todo/TodoAddForm'
import TodoList from '../components/todo/TodoList'
import { Redirect } from 'react-router-dom'

function TodoApp(props) {
  const { auth } = props

  if (!auth) return <Redirect to={'/'} />
  return (
    <>
      <TodoAddForm />
      <TodoList />
    </>
  )
}

const mapStateToProps = (store) => ({
  auth: store.user.auth,
})

export default connect(mapStateToProps)(TodoApp)
