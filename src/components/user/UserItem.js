import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../actions/userAction'

function UserItem(props) {
  // 先解構賦值，直接套用由props得到的變數值
  const {
    users,
    getUserList,
    id,
    user_name,
    display_name,
    email,
    scope,
    is_enabled,
    is_admin,
  } = props

  useEffect(() => {
    const displayUserList = () => {
      getUserList()
    }
  }, [])

  return (
    <>
      <tbody>
        <tr>
          <td>id</td>
          <td>admin</td>
          <td>Administrator</td>
          <td>null</td>
          <td></td>
          <td>true</td>
          <td>false</td>
        </tr>
      </tbody>
    </>
  )
}

const mapDispatchToProps = {
  getUserList,
}

export default connect(null, mapDispatchToProps)(UserItem)
