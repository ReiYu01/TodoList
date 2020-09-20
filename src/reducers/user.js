import { LOG_IN, LOG_OUT } from '../actions/actionType'

const initialState = {
  user_name: '',
  auth: false,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, ...action.payload }
    case LOG_OUT:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default user
