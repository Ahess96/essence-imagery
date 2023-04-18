import React from 'react'
import './Package.css'

export default function Package({pack, selectPack, activePack}) {

    return (
        <>
            <div 
            className='package-container' 
            style={{background: `url(${pack.gallery[0]})`}}
            onClick={() => selectPack(pack)}
            >
                <h3>{pack.name}</h3>
            </div>
        </>
  )
}
