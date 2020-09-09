// 第一步 匯入createStore
import { createStore } from 'redux'

// 第二
import rootReducer from '../reducers'

// 第三步 由rootReducer建立store
//const store = createStore(rootReducer)
export const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
