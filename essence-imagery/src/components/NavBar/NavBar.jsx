import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout'

export default function NavBar({user, estUser}) {
  return (
    <nav className='nav-bar'>
        { user ?
        <ul>
            <li><Link to='/orders'>YOUR BOOKINGS</Link></li>
            <li><Link to='/packages'>BOOK HERE</Link></li>
            <li>CONTACT US</li>
            <li><Link to='https://instagram.com' target="_blank">INSTAGRAM</Link></li>
            <li><Logout user={user} estUser={estUser} /></li>
        </ul>
        : <p><Link to='/'>LOGIN/SIGN UP</Link></p>
        }
    </nav>
  )
}
