import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

export function sendPackage(packageId, date) {
    const payload = {date: date}
    // console.log('THIS IS HAPPENING in orders-API', payload)
    return sendRequest(`${BASE_URL}/${packageId}`, 'POST', payload)
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteOrder(orderId) {
    console.log('THIS IS', orderId)
    return sendRequest(`${BASE_URL}/users/${orderId}`, 'POST')
}

// export function packInOrder(packsId) {
//     const payload = {package: packsId}
//     return sendRequest(BASE_URL, 'GET', payload)
// }