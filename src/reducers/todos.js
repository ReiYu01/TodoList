import {
  ADD_TODO,
  DELETE_TODO,
  FINISH_TODO,
  TOGGLE_TODO,
  CHANGE_TEXT,
} from '../actions/actionType'

const myTodoListFromLocal = localStorage.getItem('myTodoList')
const initialState = myTodoListFromLocal
  ? JSON.parse(myTodoListFromLocal)
  : [
      {
        id: 1591256594282,
        text: '每週三交進度',
        completed: false,
        edited: false,
      },
    ]

const todos = (state = initialState, action) => {
  const originalTodos = JSON.parse(JSON.stringify(state))
  //用JSON.stringify把物件轉成字串，再用JSON.parse把字串轉成新的物件
  //  深拷貝，創一個一樣的物件，新物件跟原物件不共用記憶體，修改新物件不會改到原物件

  let todoItemIndex
  let newTodos

  switch (action.type) {
    case ADD_TODO:
      newTodos = [action.payload, ...originalTodos]
      localStorage.setItem('myTodoList', JSON.stringify(newTodos))
      return newTodos

    case DELETE_TODO:
      newTodos = originalTodos.filter((v) => v.id !== action.payload.id)
      localStorage.setItem('myTodoList', JSON.stringify(newTodos))
      return newTodos

    case TOGGLE_TODO:
      todoItemIndex = state.findIndex((v) => v.id === action.payload.id)
      if (todoItemIndex !== -1) {
        originalTodos[todoItemIndex].edited = !originalTodos[todoItemIndex]
          .edited
        localStorage.setItem('myTodoList', JSON.stringify(originalTodos))
      }
      return originalTodos

    case CHANGE_TEXT:
      todoItemIndex = state.findIndex((v) => v.id === action.payload.id)
      if (todoItemIndex !== -1) {
        originalTodos[todoItemIndex].text = action.payload.text
        localStorage.setItem('myTodoList', JSON.stringify(originalTodos))
      }
      return originalTodos

    case FINISH_TODO:
      todoItemIndex = state.findIndex((v) => v.id === action.payload.id)
      if (todoItemIndex !== -1) {
        originalTodos[todoItemIndex].completed = !originalTodos[todoItemIndex]
          .completed
        localStorage.setItem('myTodoList', JSON.stringify(originalTodos))
      }
      return originalTodos

    default:
      return state
  }
}

export default todos
