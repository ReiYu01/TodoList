import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import MyBanner from '../components/MyBanner'

function Home(props) {
  //console.log(props)
  return (
    <>
      <MyBanner title="Home" lead="This is an index." />
      <div>
        <Link to="/about">About - Router Link</Link>
      </div>
      <hr />
      <div>
        <Link to="/todoapp">Todo List- Router Link</Link>
      </div>
    </>
  )
}

export default withRouter(Home)
