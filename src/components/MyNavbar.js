import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

function MyNavbar(props) {
  const { auth, name } = props
  const history = useHistory()
  const loginButton = (
    <>
      <Button
        variant="outline-light"
        onClick={() => {
          history.push('/memberlogin')
        }}
      >
        Log In
      </Button>
    </>
  )
  const logoutButton = (
    <>
      <Button
        variant="outline-light"
        onClick={() => {
          history.push('/memberlogin')
        }}
      >
        Log Out
      </Button>
    </>
  )
  const displayButton = auth ? logoutButton : loginButton
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {/* 把Nav.Link當作NavLink來使用 */}
          {/* 記得首頁`/`要加exact作精確比對 */}
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          {auth ? (
            <Nav.Link as={NavLink} to="/todoapp">
              Todo List
            </Nav.Link>
          ) : (
            ''
          )}
          {auth ? (
            <Nav.Link as={NavLink} to="/userapp">
              User List
            </Nav.Link>
          ) : (
            ''
          )}
        </Nav>
        <Form inline>{displayButton}</Form>
      </Navbar>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.user.auth,
  }
}
export default connect(mapStateToProps)(MyNavbar)
