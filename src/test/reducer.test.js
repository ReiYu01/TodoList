import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as types from '../actions/actionType'
import reducer from '../reducers'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('todos reducer', () => {
  // 每一次測試後清除 fetchMock 的紀錄
  afterEach(() => {
    fetchMock.restore()
  })

  test('test reducer', () => {
    // 確認初始資料
    const initialData = {
      todos: [
        {
          id: 1591256594282,
          text: '每週三交進度',
          completed: false,
          edited: false,
        },
      ],
    }
    expect(reducer(undefined, {})).toEqual(initialData)

    // // 傳入初始值及 addTodo ：
    // expect(reducer(initialData, actions.addCounter())).toEqual({
    //   count: 1,
    //   request: false,
    // })

    // // 傳入初始值及 fetchCountRequest ：
    // // 確認回傳的內容 request 是否變成 true
    // expect(reducer(initialData, actions.fetchCountRequest())).toEqual({
    //   count: 0,
    //   request: true,
    // })

    // // 傳入初始值及 fetchCountSuccess ：
    // // 確認回傳的內容 count 是否如 response 的 count 相同
    // expect(
    //   reducer(initialData, actions.fetchCountSuccess({ count: 2 }))
    // ).toEqual({
    //   count: 2,
    //   request: false,
    // })
  })
})
