import React from 'react'
import './Package.css'

export default function Package({pack, selectPack}) {

    return (
        <>
            <div 
            className='package-item h-full'
            onClick={() => selectPack(pack)}
            >
                <img src={pack.gallery[0]} class='object-contain h-full w-full' alt={pack.name} />
                <h3>{pack.name}</h3>
            </div>
        </>
  )
}
