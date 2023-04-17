import React, { useEffect, useRef, useState } from 'react'
import * as packagesAPI from '../../utilities/packages-api';
import Package from '../../components/Package/Package';

export default function PackagePage({user, estUser}) {
  const [packages, setPackages] = useState([]);
  const [activeCat, setActiveCat] = useState(null);
  // const packagesRef = useRef([]);
  
  useEffect(function() {
    async function getPackages() {
      const packages = await packagesAPI.getAll();
      // packages is array of package objects
      setPackages(packages);
    }
    getPackages();
  }, [])
  return (
    <div className='package-container'>
      {packages.map((pack, idx) => <Package pack={pack} key={idx} />)}
    </div>
  )
}
