import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeText, toggleTodo } from '../../actions/'

function TodoItemEditForm(props) {
  const [editText, setEditText] = useState(props.value.text)

  //console.log(props)
  // 先解構賦值，直接套用由props得到的變數值
  const { value, changeText, toggleTodo } = props
  const handleEditSave = (id, text) => {
    toggleTodo(id)
    changeText(id, text)
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-inline">
          <input
            id="todoEdit"
            className="form-control mb2"
            type="text"
            value={editText}
            onChange={(event) => {
              setEditText(event.target.value)
            }}
          />
          <button
            type="button"
            className="btn btn-info mb2"
            onClick={() => {
              handleEditSave(value.id, editText)
            }}
          >
            save
          </button>
        </div>
      </li>
    </>
  )
}

const mapStateToProps = null

const mapDispatchToProps = {
  toggleTodo,
  changeText,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemEditForm)
