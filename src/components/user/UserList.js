import React, { useEffect } from 'react'
import UserItem from './UserItem'
// import TodoItemEditForm from './TodoItemEditForm'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserList } from '../../actions/userAction'

function UserList(props) {
  const { users, getUserList } = props

  useEffect(() => {
    getUserList()
  }, [])

  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>user_name</th>
              <th>display_name</th>
              <th>email</th>
              <th>scope</th>
              <th>is_enabled</th>
              <th>is_admin</th>
            </tr>
          </thead>
          <UserItem />
          {/* {users.map((value, index) => {
            return <UserItem key={value.id} value={value} />
          })} */}
        </Table>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}
const mapDispatchToProps = {
  getUserList,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
