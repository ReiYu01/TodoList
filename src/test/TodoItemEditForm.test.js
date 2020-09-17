import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import TodoAddForm from '../components/todo/TodoAddForm'
import Enzyme, { mount, shallow, render } from 'enzyme'
import setupTest from './setupTests'
import TodoItemEditForm from '../components/todo/TodoItemEditForm'

describe('Should Render TodoItemEditForm', () => {
  const mockStore = configureStore()
  const store = mockStore()

  const value = {
    id: 678678678,
    text: '每週三交進度',
    completed: false,
    edited: false,
  }

  //====render出畫面，檢查HTML====
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TodoAddForm store={store} value={value} debug />)

    expect(component).toMatchSnapshot()
  })
})
