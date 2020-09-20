import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import TodoAddForm from '../components/todo/TodoAddForm'
import Enzyme, { mount, shallow, render } from 'enzyme'
import setupTest from './setupTests'

// import { shallowToJson } from 'enzyme-to-json'
// import { cleanup, fireEvent, render } from '@testing-library/react'

// import Adapter from 'enzyme-adapter-react-16'

// 以該解析器提供給 Enzyme 做渲染 Component 的設置
// Enzyme.configure({ adapter: new Adapter() })

describe('Should Render TodoAddForm in "debug" mode', () => {
  const mockStore = configureStore()
  const store = mockStore()
  const text = ''

  //====render出畫面，檢查HTML====
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<TodoAddForm store={store} debug />)

    expect(component).toMatchSnapshot()
  })

  // ====在input輸入文字，更改文字====
  it('should be onChange correctly', () => {
    const component = mount(<TodoAddForm store={store} />)
    component
      .find('input#todoInput')
      .simulate('change', { target: { name: 'maxlength', value: 50 } })
    expect(component).toMatchSnapshot()
    component.unmount()
  })

  //====按下enter鍵，成功送出內容====
  it('should be onKeyPress correctly with Enter', () => {
    const component = mount(<TodoAddForm store={store} />)
    component.find('input#todoInput').simulate('keydown', { keyCode: 13 })
    expect(component).toMatchSnapshot()
    component.unmount()
  })
})
