import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function MyBreadcrumb(props) {
  const pathlist = ['/', '/todoapp']
  const pathnames = ['HOME', 'TODO LIST']

  // 先找出對應的中文詞
  let locationPathname = props.location.pathname

  const index = pathlist.findIndex((v) => v === locationPathname)

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {pathnames[index]}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default withRouter(MyBreadcrumb)
