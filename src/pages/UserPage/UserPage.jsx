import React, { useEffect, useState } from 'react'
import * as ordersAPI from '../../utilities/orders-api'
import Order from '../../components/Order/Order'

export default function UserPage({resetDate}) {
  const [orders, setOrders] = useState([])
  const [startUseEffect, setStartUseEffect] = useState(true)

  function setUpdateOrders() {
    setStartUseEffect(false);
    resetDate();
  }

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAll()
      setOrders(orders);
    };
    getOrders();
    setStartUseEffect(true);
  }, [startUseEffect])

  return (
    <div className='flex flex-col place-content-around'>
      <h4 className='text-3xl mt-10'>Here's your upcoming bookings. You can change the date if needed.</h4>
      {orders.map((order, idx) => <Order key={idx} order={order} setUpdateOrders={setUpdateOrders} />)}
    </div>
  )
}
