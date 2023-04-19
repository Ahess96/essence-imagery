import React, { useEffect, useState } from 'react'
import * as ordersAPI from '../../utilities/orders-api'
import Order from '../../components/Order/Order'

export default function UserPage({user}) {
  const [orders, setOrders] = useState([])

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAll()
      console.log('THIS IS ORDERS IN USERPG', orders)
      setOrders(orders);
    };
    getOrders();
  }, [])

  return (
    <div>
      {orders.map((order, idx) => <Order key={idx} order={order} />)}
    </div>
  )
}
