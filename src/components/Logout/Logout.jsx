import React from 'react'
import { logOut } from '../../utilities/users-service'


export default function Logout({user, estUser}) {
  function handleLogout() {
    logOut();
    estUser(null);
  }
    return (
    <div className="logout">
        <button class="py-2 px-4 bg-indigo-200 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-md" onClick={handleLogout}>LOG OUT</button>
    </div>
  )
}
