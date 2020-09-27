import React, { useState } from 'react'
import { connect } from 'react-redux'

import { useHistory, useLocation } from 'react-router-dom'
import MyBanner from '../components/MyBanner'
import { userLogInAsync, userLogout } from '../actions'

function MemberLogin(props) {
  const { userLogInAsync, userLogout, auth } = props
  const [user_name, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrors, setLoginErrors] = useState([])
  const history = useHistory()
  const location = useLocation()

  const loginProcess = async () => {
    const errors = []
    if (user_name === '') errors.push('Please type user_name')
    if (password === '') errors.push('Please type password')
    if (errors.length > 0) {
      setLoginErrors(errors)
      return
    }
    setLoginErrors([])
    await userLogInAsync(user_name, password)
    // loginSuccess()
  }

  const logoutProcess = () => {
    userLogout()
    logoutSuccess()
  }
  // 錯誤訊息陣列的呈現
  const displayErrors = loginErrors.length ? (
    <div className="alert alert-danger" role="alert">
      <ul className="list-unstyled">
        {loginErrors.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  ) : (
    ''
  )
  // login成功時的callback
  // const loginSuccess = () => {
  //   alert('LogIn Success，200')
  //   history.push('/', { from: '登入頁' })
  // }

  // login失敗時的callback

  const loginFail = () => {
    alert('	Bad Request，400')
    history.push('/', { from: '登入頁' })
  }

  // login失敗時的callback
  const unauthorized = () => {
    alert('	Unauthorized，401')
    history.push('/', { from: '登入頁' })
  }

  // logout成功時的callback
  const logoutSuccess = () => {
    alert('LogOut Success')
    history.push('/')
  }

  const displayButton = auth ? (
    <button className="btn btn-primary mb2" onClick={logoutProcess}>
      Log Out
    </button>
  ) : (
    <button className="btn btn-primary mb2" onClick={loginProcess}>
      Log In
    </button>
  )

  const displayForm = auth ? (
    ''
  ) : (
    <>
      <input
        className="form-control mb2"
        type="text"
        value={user_name}
        placeholder="Please type here"
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
      <input
        className="form-control mb2"
        type="text"
        value={password}
        placeholder="Please type here"
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />
    </>
  )

  return (
    <>
      <MyBanner title="登入" lead="登入頁頁面" />
      {displayErrors}
      <div className="form-inline">
        {displayForm}
        {displayButton}
      </div>
    </>
  )
}

const mapStateToProps = (store) => ({
  auth: store.user.auth,
})
const mapDispatchToProps = {
  userLogInAsync,
  userLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberLogin)
