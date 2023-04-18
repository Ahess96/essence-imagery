import React, { useEffect, useRef, useState } from 'react'
import * as packagesAPI from '../../utilities/packages-api';
import * as ordersAPI from '../../utilities/orders-api';
import Package from '../../components/Package/Package';
import './PackagePage.css'
import Gallery from '../../components/Gallery/Gallery';

export default function PackagePage({user, estUser}) {
  // const packagesRef = useRef([]);
  const [activePack, setActivePack] = useState(null);
  const [packages, setPackages] = useState([]);
  const [date, setDate] = useState('');
  async function selectPack(pack) {
    setActivePack(pack);
    // await ordersAPI.sendPackage(pack._id);
    // console.log('THIS IS HAPPENING')
  }

  async function handleAddToOrder(event, activePack, date) {
    event.preventDefault();
    setDate(event.target.value)
    await ordersAPI.sendPackage(activePack._id, date);
    console.log('THIS IS DATE', date)
    // const newOrder = await packagesAPI.addToOrder(itemId);
    console.log('ITEMID', activePack._id);
    // setOrder(newOrder);
  }

  useEffect(function() {
    async function getPackages() {
      const packages = await packagesAPI.getAll();
      // packages is array of package objects
      setPackages(packages);
    }
    getPackages();
    // setActivePack(null);
  }, [])

  return (
    <>
      {!activePack ?
      <div className='packages-container'>
        {packages.map((pack, idx) => <Package pack={pack} key={idx} selectPack={selectPack} />)}
      </div>
      :
      <Gallery activePack={activePack} handleAddToOrder={handleAddToOrder} date={date} setDate={setDate} />
      }
    </>
  )
}
