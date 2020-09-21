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
    const obj = await response.json()
    // console.log('obj', obj)
    // if (obj.auth) dispatch(userLogin(obj))

    const getToken = sessionStorage.setItem('access_token', obj.access_token)
    dispatch(userLogin(obj.user_name))

    // const catchBadRequest = data.status(400).send()
    // const unauthorized = data.status(401).send()
  }
}
// async function catchErr() {
//   const response = await fetch('http://192.168.133.226:5000/api/v1/auth/login')

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   const movies = await response.json();
//   return movies;
// }

// catchErr().catch(error => {
//   error.message; // 'An error has occurred: 404'
// });

export const autoLogin = () => {
  return async function getUserToLogIn(dispatch) {
    const response = await fetch(`http://192.168.133.226:5000/api/v1/user/`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      }),
    })
    const obj = await response.json()
    console.log('obj', obj)
    // if (obj.auth) dispatch(userLogin(obj))

    const getToken = sessionStorage.setItem('access_token', obj.access_token)
    dispatch(userLogin(obj.user_name))
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
