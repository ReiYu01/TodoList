import {
  ADD_TODO,
  DELETE_TODO,
  FINISH_TODO,
  TOGGLE_TODO,
  CHANGE_TEXT,
} from '../actions/actionType'

const initialState = [
  {
    id: 1591256594282,
    text: '每週三交進度',
    completed: false,
    edited: false,
  },
]

const todos = (state = initialState, action) => {
  const newTodos = JSON.parse(JSON.stringify(state))
  //用JSON.stringify把物件轉成字串，再用JSON.parse把字串轉成新的物件
  //  深拷貝，創一個一樣的物件，新物件跟原物件不共用記憶體，修改新物件不會改到原物件
  let todoItemIndex

  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...newTodos]

    case DELETE_TODO:
      return newTodos.filter((v) => v.id !== action.payload.id)

    case TOGGLE_TODO:
      todoItemIndex = state.findIndex((v) => v.id === action.payload.id)
      if (todoItemIndex !== -1) {
        newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited
      }
      return newTodos

    case CHANGE_TEXT:
      todoItemIndex = state.findIndex((v) => v.id === action.payload.id)
      if (todoItemIndex !== -1) {
        newTodos[todoItemIndex].text = action.payload.text
      }
      return newTodos

    case FINISH_TODO:
      todoItemIndex = state.findIndex((v) => v.id === action.payload.id)
      console.log(todoItemIndex)
      if (todoItemIndex !== -1) {
        newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      }
      return newTodos

    default:
      return state
  }
}

export default todos
