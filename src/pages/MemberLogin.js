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
  console.log(location)

  const loginProcess = () => {
    const errors = []
    if (user_name === '') errors.push('帳號沒填')
    if (password === '') errors.push('密碼沒填')
    if (errors.length > 0) {
      setLoginErrors(errors)
      return
    }
    // 清空錯誤訊息陣列 + 登入
    // 清空錯誤訊息陣列為必要
    setLoginErrors([])
    userLogInAsync(user_name, password)
    loginSuccess()
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
  const loginSuccess = () => {
    alert('登入成功，跳回首頁')
    history.push('/', { from: '從登入頁來的' })
  }

  // logout成功時的callback
  const logoutSuccess = () => {
    alert('登出成功，跳回首頁')
    history.push('/')
  }

  const displayButton = auth ? (
    <button className="btn btn-primary mb2" onClick={logoutProcess}>
      登出
    </button>
  ) : (
    <button className="btn btn-primary mb2" onClick={loginProcess}>
      登入
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
        placeholder="請輸入帳號"
        onChange={(event) => {
          setUsername(event.target.value)
        }}
      />
      <input
        className="form-control mb2"
        type="text"
        value={password}
        placeholder="請輸入密碼"
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
