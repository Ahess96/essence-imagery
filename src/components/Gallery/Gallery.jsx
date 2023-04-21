import React from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom';

export default function Gallery({activePack, handleAddToOrder, date, setDate, selectPack}) {
  function handleChange(evt) {
    setDate(evt.target.value);
  }
  return (
    <>
      <div className="gallery-text-container mx-auto w-1/2">
        <h3 className='text-3xl tracking-wider text-center m-6'>{activePack.name}</h3>
        <h4 className='tracking-wide capitalize m-4'>{activePack.description}</h4>
        <h5 className='text-center italic'>Starting at ${activePack.price}</h5>
      </div>

      <div
        className="gallery-item w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        id='slider'
      >
        {activePack.gallery.map((image, idx) => (
          <img key={idx} src={image} alt="gallery picture" className='w-[820px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' />
        ))}
      </div>

      <div className='calendar-container flex place-content-center'>
        <h4 className='flex items-center justify-center'>Create Your Booking</h4>
        <form onSubmit={(event) => handleAddToOrder(event, activePack, date)}>
          <input type="date" timezone='PST' value={date} name='date'
          onChange={handleChange}
          className='appearance-none bg-transparent border-b-2 border-gray-300 w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm' 
          />
          <button className='py-2 px-4 bg-slate-200 hover:bg-red-300 text-black font-semibold rounded-md shadow-md m-4' type='submit'>Confirm Date</button>
        </form>
      </div>
      <Link to='/packages' className='flex items-center justify-center' onClick={() => selectPack(null)}>Back to packages</Link>
      
    </>
  )
}
