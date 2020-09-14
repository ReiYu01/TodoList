import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
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

  it('renders correctly', () => {
    const tree = renderer
      .create(<TodoItemEditForm store={store} value={value} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  //   tree.props.onChange()
  //   // re-rendering
  //   tree = component.toJSON()
  //   expect(tree).toMatchSnapshot()
})
