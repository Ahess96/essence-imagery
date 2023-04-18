import React, { useEffect, useRef, useState } from 'react'
import * as packagesAPI from '../../utilities/packages-api';
import Package from '../../components/Package/Package';
import './PackagePage.css'
import GalleryPage from '../GalleryPage/GalleryPage'

export default function PackagePage({user, estUser}) {
  // const packagesRef = useRef([]);
  const [activePack, setActivePack] = useState(null);
  const [packages, setPackages] = useState([])

  function selectPack(pack) {
    setActivePack(pack)
  }

  useEffect(function() {
    async function getPackages() {
      const packages = await packagesAPI.getAll();
      // packages is array of package objects
      setPackages(packages);
    }
    getPackages();
  }, [])

  return (
    <>
      {!activePack ?
      <div className='packages-container'>
        {packages.map((pack, idx) => <Package pack={pack} key={idx} selectPack={selectPack} activePack={activePack} />)}
      </div>
      :
      <GalleryPage />
      }
    </>
  )
}
