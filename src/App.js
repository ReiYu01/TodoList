import React from 'react'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ProtectedRoute from './utils/ProtectedRoute'

//components
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

//pages
import Home from './pages/Home'
import TodoApp from './pages/TodoApp'
import MemberLogin from './pages/MemberLogin'
import UserApp from './pages/UserApp'

function App(props) {
  return (
    <Router>
      <>
        <MyNavbar name={'ruiyu'} />
        <MainContent>
          <Switch>
            <Route exact path="/todoapp">
              <TodoApp />
            </Route>
            <Route exact path="/userapp">
              <UserApp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/memberlogin">
              <MemberLogin />
            </Route>
            <ProtectedRoute path="/todoapp">
              <TodoApp />
            </ProtectedRoute>
            <ProtectedRoute path="/userapp">
              <UserApp />
            </ProtectedRoute>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}
export default App
