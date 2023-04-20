import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout'

export default function NavBar({user, estUser}) {
  return (
    <nav class="flex justify-between items-center px-6 py-4 bg-orange-300/[.88] fixed inset-x-0 top-0 z-10 hover:bg-orange-600/25">
      <div class="flex items-center text-white">
        <p><Link class="hover:text-red-600" to='/'>Essence Imagery</Link></p>
      </div>
        { user ?
        <ul class="flex items-center">
            <li class="mr-6 text-white"><Link class="hover:text-red-600" to='/orders'>YOUR BOOKINGS</Link></li>
            <li class="mr-6 text-white"><Link class="hover:text-red-600" to='/packages'>BOOK HERE</Link></li>
            <li class="mr-6 text-white">CONTACT US</li>
            <li class="mr-6 text-white"><Link class="hover:text-red-600" to='https://instagram.com' target="_blank">INSTAGRAM</Link></li>
            <li class="mr-6 text-white"><Logout user={user} estUser={estUser} /></li>
        </ul>
        : <p class="mr-6 text-white"><Link class="hover:text-red-600" to='/'>LOGIN/SIGN UP</Link></p>
        }
    </nav>
  )
}
