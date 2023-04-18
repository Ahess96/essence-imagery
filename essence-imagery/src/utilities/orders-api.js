import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

export function sendPackage(packageId, date) {
    const payload = {date: date}
    console.log('THIS IS HAPPENING in orders-API', payload)
    return sendRequest(`${BASE_URL}/${packageId}`, 'POST', payload)
}