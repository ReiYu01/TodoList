import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink, withRouter } from 'react-router-dom'

function MyNavbar(props) {
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

          <Nav.Link as={NavLink} to="/todoapp">
            Todo List
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar)
