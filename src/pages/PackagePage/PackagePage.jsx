import React, { useEffect, useRef, useState } from 'react'
import * as packagesAPI from '../../utilities/packages-api';
import * as ordersAPI from '../../utilities/orders-api';
import Package from '../../components/Package/Package';
import './PackagePage.css'
import Gallery from '../../components/Gallery/Gallery';
import { useNavigate } from 'react-router-dom';

export default function PackagePage({ date, setDate, selectPack, activePack}) {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  async function handleAddToOrder(event, activePack, date) {
    event.preventDefault();
    setDate(event.target.value)
    await ordersAPI.sendPackage(activePack._id, date);
    selectPack([]);
    navigate('/orders');
  }

  useEffect(function() {
    async function getPackages() {
      const packages = await packagesAPI.getAll();
      setPackages(packages);
    }
    getPackages();
  }, [])

  return (
    <>
      {!activePack ?
        <div className='flex-col'>
        <h1 className='text-3xl m-8'>Packages</h1>
        <div className="columns-2xl">
          {packages.map((pack, idx) => <Package pack={pack} key={idx} selectPack={selectPack} />)}
        </div>
        </div>
      :
        <div className="gallery-container">
          <Gallery activePack={activePack} handleAddToOrder={handleAddToOrder} date={date} setDate={setDate} selectPack={selectPack} />
        </div>
      }
    </>
  )
}
