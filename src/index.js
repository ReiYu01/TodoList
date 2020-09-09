import React from 'react'
import ReactDOM from 'react-dom'

// 這是react-redux要綁定使用的最上層元件
import { Provider } from 'react-redux'

import { store } from './stores'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { rootReducer } from './reducers'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
