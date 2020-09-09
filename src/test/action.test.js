import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../actions'
import * as types from '../actions/actionType'

// import reducer from '../reducers'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actionTodo', () => {
  // 每一次測試後清除 fetchMock 的紀錄
  afterEach(() => {
    fetchMock.restore()
  })

  //測試新增
  test('test actions addTodo', () => {
    const newTodoItem = []
    const expectAction = {
      type: types.ADD_TODO,
      payload: newTodoItem,
    }
    expect(actions.addTodo(newTodoItem)).toEqual(expectAction)
  })

  //測試刪除
  test('test actions deleteTodo', () => {
    const deleteId = []
    const expectAction = {
      type: types.DELETE_TODO,
      payload: deleteId,
    }
    expect(actions.deleteTodo(deleteId)).toEqual(expectAction)
  })

  //測試修改
  test('test actions toggleTodo', () => {
    const id = []
    const expectAction = {
      type: types.TOGGLE_TODO,
      payload: id,
    }
    expect(actions.toggleTodo(id)).toEqual(expectAction)
  })

  //測試修改內容
  test('test actions changeText', () => {
    const id = []
    const text = ''
    const expectAction = {
      type: types.CHANGE_TEXT,
      payload: { id, text },
    }
    expect(actions.changeText(id, text)).toEqual(expectAction)
  })

  //測試完成
  test('test actions finishTodo', () => {
    const id = []
    const expectAction = {
      type: types.FINISH_TODO,
      payload: id,
    }
    expect(actions.finishTodo(id)).toEqual(expectAction)
  })
})
