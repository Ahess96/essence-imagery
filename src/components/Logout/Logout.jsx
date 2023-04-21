import React from 'react'
import { logOut } from '../../utilities/users-service'


export default function Logout({estUser}) {
  function handleLogout() {
    logOut();
    estUser(null);
  }
    return (
    <div className="logout">
        <button className="py-2 px-4 bg-slate-200 hover:bg-slate-500 text-black font-semibold rounded-lg shadow-md" onClick={handleLogout}>LOG OUT</button>
    </div>
  )
}
