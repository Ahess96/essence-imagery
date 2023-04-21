import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'

export default function 
({selectPack}) {
  return (
    <div className='about-us flex flex-col basis-1/2 text-center  place-content-center'>
        <h3 className='text-3xl bg-gray-400 h-20 flex items-center justify-center'>About Us</h3>
        <p className='text-xl m-5 w-1/2 self-center'>We're two passionate explorers and photographers located in Durham, CA. Our photography is all about capturing your special moments in a fun, memorable way.</p>
        <p className='text-xl m-5 w-1/2 self-center'>If you have no idea what to expect from your photos, we'll take care of everything from posing, location and outfit suggestions. If you have something specific in mind, let's do it!</p>
        <Link to='/packages' onClick={() => selectPack(null)}className='text-3xl hover:text-amber-500 text-blue-400'>PACKAGES/GALLERIES</Link>
        <br />
    </div>
  )
}
