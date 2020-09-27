import React from 'react'
import { connect } from 'react-redux'

// import TodoAddForm from '../components'
// import TodoList from '../components'
import { Redirect } from 'react-router-dom'
import { getUser } from '../actions'

function UserApp(props) {
  const { getUser, auth } = props

  //   getUser()

  if (!auth) return <Redirect to={'/'} />
  return <>{/* <TodoAddForm />
      <TodoList /> */}</>
}

const mapStateToProps = (store) => ({
  auth: store.user.auth,
})

export default connect(mapStateToProps)(UserApp)
