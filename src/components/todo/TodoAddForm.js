import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

function TodoAddForm(props) {
  const [text, setText] = useState('')
  const { todos, setTodos, addTodo } = props

  return (
    <>
      <div className="form-group">
        <label htmlFor="todoInput">Please input</label>
        <input
          id="todoInput"
          className="form-control"
          type="text"
          value={text}
          placeholder=""
          onChange={(event) => {
            setText(event.target.value)
          }}
          onKeyPress={(event) => {
            // 處理按下 Enter鍵
            if (event.key === 'Enter' && event.target.value !== '') {
              // 建立一個新的todo項目
              const newTodoItem = {
                id: +new Date(),
                text: event.target.value,
                edited: false,
                completed: false,
              }

              addTodo(newTodoItem)
              setText('')
            }
          }}
        />
      </div>
    </>
  )
}

const mapStateToProps = null

const mapDispatchToProps = {
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAddForm)
