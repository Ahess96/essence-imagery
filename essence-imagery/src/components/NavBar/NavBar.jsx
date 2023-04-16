import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar({user}) {
  return (
    <nav className='nav-bar'>
        { user ?
        <ul>
            <li>YOUR BOOKINGS</li>
            <li>BOOK HERE</li>
            <li>CONTACT US</li>
            <li><Link to='https://instagram.com' target="_blank">INSTAGRAM</Link></li>
            <li>LOGOUT</li>
        </ul>
        : <p>hi</p>
        }
    </nav>
  )
}
