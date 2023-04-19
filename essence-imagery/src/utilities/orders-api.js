import sendRequest from "./send-request";
import { getToken } from "./users-service";
const BASE_URL = '/api/orders';

export function sendPackage(packageId, date) {
    const payload = {date: date}
    console.log('THIS IS HAPPENING in orders-API', payload)
    return sendRequest(`${BASE_URL}/${packageId}`, 'POST', payload)
}

export function getAll() {
    return sendRequest(BASE_URL);
}

// export async function getOrders() {
//     const options = getOptions();
//     console.log('THIS IS OPTIONS', options)
//     const res = await fetch(`${BASE_URL}/history`, options);
//     return res.json();
//   }

// function getOptions() {
//     return {
//         headers: {
//             Authorization: `Bearer ${getToken()}`
//         }
//     };
// }