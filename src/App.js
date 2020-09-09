import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

import Home from './pages/Home'
import TodoApp from './pages/TodoApp'

import NotFoundPage from './pages/NotFoundPage'

function App(props) {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route exact path="/todoapp">
              <TodoApp />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
