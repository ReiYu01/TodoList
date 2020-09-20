// 第一步 匯入createStore
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// 第二
import rootReducer from '../reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// 第三步 由rootReducer建立store
//const store = createStore(rootReducer)
export const store = createStore(
  rootReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunk))
)
