import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//components
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

//pages
import Home from './pages/Home'
import TodoApp from './pages/TodoApp'

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
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
