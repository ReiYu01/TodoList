import { LOG_IN, LOG_OUT } from '../actions/actionType'

//登入
export const userLogin = (payload) => {
  return { type: LOG_IN, payload }
}

//登入頁
export const userLogInAsync = (user_name, password) => {
  return async function getUserInfoFromServer(dispatch) {
    // 注意header資料格式要設定，伺服器才知道是json格式
    const data = {
      user_name,
      password,
    }
    // console.log(data)
    const response = await fetch(
      'http://192.168.133.226:5000/api/v1/auth/login',
      {
        method: 'POST',
        // credentials: 'include',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const responseStatus = response.status
    // console.log(responseStatus)

    const obj = await response.json()
    // if (obj.auth) dispatch(userLogin(obj))

    if (responseStatus === 200) {
      const getToken = localStorage.setItem('access_token', obj.access_token)
      const payload = {
        user_name,
        auth: true,
      }
      dispatch(userLogin(payload))
    } else if (responseStatus === 400) {
    }

    // const catchBadRequest = data.status(400).send()
    // const unauthorized = data.status(401).send()
  }
}

//取得使用者
export const getUser = () => {
  return async function getUserToLogIn(dispatch) {
    const response = await fetch('http://192.168.133.226:5000/api/v1/user/', {
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    })
    const obj = await response.json()
  }
}

//登出
export const userLogout = () => {
  const payload = {
    auth: false,
    user_name: '',
  }
  return { type: LOG_OUT, payload }
}

//登出頁
export const userLogOutAsync = (user_name, password) => {
  return async function getUserInfoFromServer(dispatch) {}
}
