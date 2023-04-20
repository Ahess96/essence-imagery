import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div className='about-us'>
        <h3>About Us</h3>
        <p>We're two passionate explorers and photographers located in Durham, CA. Our photography is all about capturing your special moments in a fun, memorable way.</p>
        <p>If you have no idea what to expect from your photos, we'll take care of everything from posing, location and outfit suggestions. If you have something specific in mind, let's do it!</p>
        <Link to='/packages'>PACKAGES/GALLERIES</Link>
        <br />
        <img src="" alt="Our Family" />
    </div>
  )
}
