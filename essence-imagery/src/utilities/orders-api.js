import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

export function sendPackage(packageId) {
    console.log('THIS IS HAPPENING in orders-API')
    return sendRequest(`${BASE_URL}/${packageId}`, 'POST')
}