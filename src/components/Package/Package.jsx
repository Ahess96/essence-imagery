import React from 'react'
import './Package.css'

export default function Package({pack, selectPack}) {

    return (
        <>
            <div 
            className='package-container relative'
            onClick={() => selectPack(pack)}
            >
                <img src={pack.gallery[0]} class='object-cover h-full w-full' alt={pack.name} />
                <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">{pack.name}</h3>
            </div>
        </>
  )
}
