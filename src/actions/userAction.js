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
    const response = await fetch('http://localhost:3030/api/v1/auth/login', {
      method: 'POST',
      // credentials: 'include',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const obj = await response.json()
    console.log('obj', obj)
    if (obj.auth) dispatch(userLogin(obj))
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
