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
  const [order, setOrder] = useState([]);

  async function selectPack(pack) {
    setActivePack(pack);
    await ordersAPI.sendPackage(pack._id);
    console.log('THIS IS HAPPENING')
  }

  async function handleAddToOrder(itemId) {
    const newOrder = await packagesAPI.addToOrder(itemId);
    console.log('ITEMID', itemId);
    setOrder(newOrder);
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
        {packages.map((pack, idx) => <Package pack={pack} key={idx} selectPack={selectPack} activePack={activePack} />)}
      </div>
      :
      <Gallery activePack={activePack} handleAddToOrder={handleAddToOrder}/>
      }
    </>
  )
}
