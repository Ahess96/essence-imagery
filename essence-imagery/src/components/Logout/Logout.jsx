import React from 'react'
import { logOut } from '../../utilities/users-service'


export default function Logout({user, estUser}) {
  function handleLogout() {
    logOut();
    estUser(null);
  }
    return (
    <div className="logout">
        <div>{user.name}</div>
        <button onClick={handleLogout}>LOG OUT</button>
    </div>
  )
}
