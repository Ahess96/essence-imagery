import React from 'react'
import * as ordersAPI from '../../utilities/orders-api';

export default function Order({order, date, setUpdateOrders}) {
  
  async function handleSubmit(evt) {
    evt.preventDefault();
    await ordersAPI.deleteOrder(evt.target['_id'].value);
    setUpdateOrders() 
  }

  async function handleSubmitDate(evt) {
    evt.preventDefault();
    await ordersAPI.updateDate(evt.target.date.value, evt.target['_id'].value);
  }

  return (
    <div>
      {new Date(order.date).toDateString()}
      <form onSubmit={(evt) => handleSubmitDate(evt)}>
        <input type="date" name="date" value={date} 
        className='appearance-none bg-transparent border-b-2 border-gray-300 w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-sm' />
        <input type="hidden" name='_id' value={order._id} />
        <button type="submit">Change Date</button>
      </form>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <input type="hidden" name='_id' value={order._id}/>
        <button type='submit'>DELETE</button>
      </form>
        
    </div>
  )
}
