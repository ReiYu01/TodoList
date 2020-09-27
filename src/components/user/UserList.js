import React from 'react'
import UserItem from './TodoItem'
// import TodoItemEditForm from './TodoItemEditForm'
import { connect } from 'react-redux'

function TodoList(props) {
  const { users, handleEditedSave } = props

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
        </Table>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    // user: state.user,
  }
}

export default connect(mapStateToProps)(TodoList)
