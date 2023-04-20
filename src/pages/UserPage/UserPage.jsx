import React, { useEffect, useState } from 'react'
import * as ordersAPI from '../../utilities/orders-api'
import Order from '../../components/Order/Order'

export default function UserPage() {
  const [orders, setOrders] = useState([])
  const [startUseEffect, setStartUseEffect] = useState(true)

  function setUpdateOrders() {
    setStartUseEffect(false);
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
    <div>
      <h4>Here's your upcoming bookings. You can change the date if needed.</h4>
      {orders.map((order, idx) => <Order key={idx} order={order} setUpdateOrders={setUpdateOrders} />)}
    </div>
  )
}
