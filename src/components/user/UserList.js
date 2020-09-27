import React from 'react'
// import UserItem from './UserItem'
// import TodoItemEditForm from './TodoItemEditForm'
import { connect } from 'react-redux'
import { getUserList } from '../../actions/userAction'

function UserList(props) {
  const { users, handleEditedSave, getUserList } = props

  return (
    <>
      <div>
        <table striped bordered hover>
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
          {/* {users.map((value, index) => {
            if (value.edited) {
              return (
                <TodoItemEditForm
                  key={value.id}
                  value={value}
                  handleEditSave={handleEditedSave}
                />
              )
            }
            return <UserItem key={value.id} value={value} />
          })} */}
        </table>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    // user: state.user,
  }
}
const mapDispatchToProps = {
  getUserList,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
