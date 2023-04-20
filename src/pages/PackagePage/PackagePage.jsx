import React, { useEffect, useRef, useState } from 'react'
import * as packagesAPI from '../../utilities/packages-api';
import * as ordersAPI from '../../utilities/orders-api';
import Package from '../../components/Package/Package';
import './PackagePage.css'
import Gallery from '../../components/Gallery/Gallery';
import { useNavigate } from 'react-router-dom';

export default function PackagePage({ date, setDate }) {
  const [activePack, setActivePack] = useState(null);
  const [packages, setPackages] = useState([]);
  // const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();

  async function selectPack(pack) {
    setActivePack(pack);
  }

  async function handleAddToOrder(event, activePack, date) {
    event.preventDefault();
    setDate(event.target.value)
    await ordersAPI.sendPackage(activePack._id, date);
    navigate('/orders');
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
        <div className="columns-2xl">
          <h1 className='text-3xl'>Packages</h1>
          {packages.map((pack, idx) => <Package pack={pack} key={idx} selectPack={selectPack} />)}
        </div>
      :
        <div className="gallery-container">
          <Gallery activePack={activePack} handleAddToOrder={handleAddToOrder} date={date} setDate={setDate} />
        </div>
      }
    </>
  )
}
