import { LOG_IN, LOG_OUT } from '../actions/actionType'
import axios from 'axios'
import { push } from 'react-router-redux'

//登入
export const userLogin = (payload) => {
  return { type: LOG_IN, payload }
}

export const checkAuth = () => {
  return async function getUserInfoFromServer(dispatch) {
    const acces_token = localStorage.getItem('access_token')

    if (acces_token) {
      const { status } = await axios({
        url: 'http://192.168.133.226:5000/api/v1/auth/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${acces_token}`,
        },
      })
      if (status === 200) {
        const userInfo = acces_token.split('.')[1]
        const userInfoDecoded = JSON.parse(atob(userInfo))
        const { user_claims } = userInfoDecoded
        dispatch(userLogin(user_claims))
        // dispatch({
        //   type: LOG_IN,
        //   payload: user_claims,
        // })
      }
    }
  }
}

const loginSuccess = () => {
  alert('LogIn Success，200')
}

//登入頁
export const userLogInAsync = (user_name, password) => {
  return async function getUserToLogin(dispatch) {
    // 注意header資料格式要設定，伺服器才知道是json格式
    const data = {
      user_name,
      password,
    }
    const response = await fetch(
      'http://192.168.133.226:5000/api/v1/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const responseStatus = response.status
    const obj = await response.json()

    if (responseStatus === 200) {
      const getToken = localStorage.setItem('access_token', obj.access_token)
      const payload = {
        user_name,
      }
      dispatch(push('/'))
      dispatch(userLogin(payload))
      // loginSuccess()

    } else if (responseStatus === 400) {
    }
    // const catchBadRequest = data.status(400).send()
    // const unauthorized = data.status(401).send()
  }
}

//取得使用者
export const getUserList = () => {
  return async function getUserInfoFromServer(dispatch) {
    // const response = await fetch('http://192.168.133.226:5000/api/v1/user/', {
    //   headers: new Headers({
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    //   }),
    // })
    // const obj = await response.json()

    const obj = await axios({
      url: 'http://192.168.133.226:5000/api/v1/user/',
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        // Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    console.log(obj)
  }
}

//登出
export const userLogout = () => {
  return { type: LOG_OUT }
}

//登出頁
export const userLogOutAsync = (user_name, password) => {
  return async function getUserInfoFromServer(dispatch) {}
}
