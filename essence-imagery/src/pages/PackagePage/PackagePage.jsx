import React, { useEffect, useRef, useState } from 'react'
import * as packagesAPI from '../../utilities/packages-api';

export default function PackagePage({user, estUser}) {
  const [packages, setPackages] = useState([]);
  const [activeCat, setActiveCat] = useState(null);
  const packagesRef = useRef([]);
  
  useEffect(function() {
    async function getPackages() {
      const packages = await packagesAPI.getAll();
      setPackages(packages);
    }
  })
  return (
    <div>

    </div>
  )
}
