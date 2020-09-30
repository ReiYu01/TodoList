import { LOG_IN, LOG_OUT, GET_USER } from '../actions/actionType'

const initialState = {
  user_name: '',
  auth: false,
  id: '',
  display_name: '',
  email: '',
  scope: '',
  is_enabled: false,
  is_admin: false,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, ...action.payload, auth: true }
    case GET_USER:
      return { ...state, ...action.payload }
    case LOG_OUT:
      localStorage.clear()
      return { ...initialState }
    default:
      return state
  }
}

export default users
