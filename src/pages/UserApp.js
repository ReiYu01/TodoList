import React from 'react'
import { connect } from 'react-redux'

// import TodoAddForm from '../components'
// import TodoList from '../components'
import { Redirect } from 'react-router-dom'
import UserList from '../components/user/UserList'

function UserApp(props) {
  const { auth } = props

  if (!auth) return <Redirect to={'/'} />
  return (
    <>
      <UserList />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.users.auth,
  }
}

export default connect(mapStateToProps)(UserApp)
