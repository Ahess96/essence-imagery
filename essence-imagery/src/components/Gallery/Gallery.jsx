import React from 'react'
import './Gallery.css'

export default function Gallery({activePack}) {
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
    </>
  )
}
