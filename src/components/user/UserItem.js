import React from 'react'
import { connect } from 'react-redux'
// import { deleteTodo, toggleTodo, finishTodo } from '../../actions/'

function UserItem(props) {
  // console.log(props)
  // 先解構賦值，直接套用由props得到的變數值
  //   const { value, deleteTodo, toggleTodo, finishTodo } = props

  const date = new Date(value.id)

  //完成狀態的CSS
  const cssClasses = value.completed
    ? 'list-group-item d-flex justify-content-between align-items-center list-group-item-dark'
    : 'list-group-item d-flex justify-content-between align-items-center'

  const handleDelete = (id) => {
    deleteTodo(id)
  }
  const handleEditedToggle = (id) => {
    toggleTodo(id)
  }
  const handleCompletedToggle = (id) => {
    finishTodo(id)
  }

  return (
    <>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
        </tr>
      </tbody>

      <span className="badge badge-primary badge-pill">
        {date.toLocaleString()}
      </span>
    </>
  )
}
const mapDispatchToProps = {
  //   deleteTodo,
  //   toggleTodo,
  //   finishTodo,
}

export default connect(null, mapDispatchToProps)(TodoItem)
