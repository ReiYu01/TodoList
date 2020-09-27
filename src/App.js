import React, { useEffect } from 'react'
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

import { checkAuth } from './actions/userAction'

function App(props) {
  const { checkAuth } = props
  useEffect(() => {
    checkAuth()
  }, [])
  return (
    <Router>
      <>
        <MyNavbar name={'ruiyu'} />
        <MainContent>
          <Switch>
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

const mapDispatchToProps = {
  checkAuth,
}
export default connect(null, mapDispatchToProps)(App)
