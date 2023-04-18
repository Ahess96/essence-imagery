import React from 'react'
import './Gallery.css'

export default function Gallery({activePack, handleAddToOrder, date, setDate}) {
  function handleChange(evt) {
    setDate(evt.target.value);
  }
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
      <form onSubmit={(event) => handleAddToOrder(event, activePack, date)}>
        <input type="date" value={date} name='date'
         onChange={handleChange} 
         />
        <button type='submit'></button>
      </form>
    </div>
    </>
  )
}
