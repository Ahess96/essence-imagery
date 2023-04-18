import React from 'react'
import './Gallery.css'

export default function Gallery({activePack, handleAddToOrder}) {
  
  return (
    <>
    <div className="gallery-container">
      {activePack.gallery.map((image, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          className="gallery-item"
        >working</div>
      ))}
    </div>
    <div className='calendar-container'>
      <h4>Create Your Booking</h4>
      <form onSubmit={() => handleAddToOrder(activePack._id)}>
        <input type="date" />
        <button type='submit'></button>
      </form>
    </div>
    </>
  )
}
