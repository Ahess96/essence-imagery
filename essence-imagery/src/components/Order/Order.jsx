import React from 'react'
import * as ordersAPI from '../../utilities/orders-api';

export default function Order({order}) {
  
  async function handleSubmit(evt) {
    evt.preventDefault();
    await ordersAPI.deleteOrder(evt.target.value);
  }

  return (
    <div>
      {order.package.name}
      <form onSubmit={(evt) => handleSubmit(evt)}>
      <input type="hidden" name='order._id' value={order._id} />
      <button type='submit'>DELETE</button>
      </form>
        
    </div>
  )
}
