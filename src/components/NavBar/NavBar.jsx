import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout'

export default function NavBar({user, estUser, selectPack}) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-orange-300/[.88] fixed inset-x-0 top-0 z-10 hover:bg-orange-600/25">
      <div className="flex items-center text-white">
        <p><Link className="hover:text-red-600" to='/'>Essence Imagery</Link></p>
      </div>
        { user ?
        <ul className="flex items-center">
            <li className="mr-6 text-white" onClick={() => selectPack(null)} ><Link className="hover:text-red-600" to='/orders'>YOUR BOOKINGS</Link></li>
            <li className="mr-6 text-white" onClick={() => selectPack(null)}><Link className="hover:text-red-600" to='/packages'>BOOK HERE</Link></li>
            <li className="mr-6 text-white"><Link className="hover:text-red-600" to='https://www.instagram.com/essence.imagery/' target="_blank">INSTAGRAM</Link></li>
            <li className="mr-6 text-white"><Logout user={user} estUser={estUser} /></li>
        </ul>
        : <p className="mr-6 text-white"><Link className="hover:text-red-600" to='/'>LOGIN/SIGN UP</Link></p>
        }
    </nav>
  )
}
