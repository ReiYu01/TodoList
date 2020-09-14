import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import TodoAddForm from '../components/todo/TodoAddForm'

describe('Should Render TodoAddForm', () => {
  const mockStore = configureStore()
  const store = mockStore()

  it('renders correctly', () => {
    const component = renderer.create(<TodoAddForm store={store} />)
    let tree = component.toJSON()
    // tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    // })

    // it('onChange correctly', () => {
    tree.props.onKeyPress()
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // let chart = tree.toJSON()
  // expect(chart).toMatchSnapshot()

  // chart.props.onKeyPress()
  // // re-rendering
  // chart = tree.toJSON()
  // expect(chart).toMatchSnapshot()
})
