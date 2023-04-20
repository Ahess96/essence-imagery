import React from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom';

export default function Gallery({activePack, handleAddToOrder, date, setDate}) {
  function handleChange(evt) {
    setDate(evt.target.value);
  }
  return (
    <>
      <div className="gallery-text">
        <h3 className='text-3xl tracking-wider text-center'>{activePack.name}</h3>
        <h4 className='tracking-wide capitalize'>{activePack.description}</h4>
        <h5 className='text-center'>Starting at ${activePack.price}</h5>
      </div>

      <div
        className="gallery-item w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        id='slider'
      >
        {activePack.gallery.map((image) => (
          <img src={image} alt="gallery picture" className='w-[820px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' />
        ))}
      </div>

      <div className='calendar-container'>
        <h4>Create Your Booking</h4>
        <form onSubmit={(event) => handleAddToOrder(event, activePack, date)}>
          <input type="date" value={date} name='date'
          onChange={handleChange}
          className='appearance-none bg-transparent border-b-2 border-gray-300 w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm' 
          />
          <button type='submit'>Confirm Date</button>
        </form>
        <Link to='/packages'>Back to packages</Link>
      </div>
    </>
  )
}
