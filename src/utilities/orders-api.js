import sendRequest from "./send-request";
const BASE_URL = '/api/orders';

export function sendPackage(packageId, date) {
    const payload = {date: date}
    return sendRequest(`${BASE_URL}/${packageId}`, 'POST', payload)
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteOrder(orderId) {
    const payload = {_id: orderId};
    return sendRequest(`${BASE_URL}/users/${orderId}`, 'DELETE', payload)
}

export function updateDate(date, orderId) {
    const payload = {date: date, _id: orderId};
    return sendRequest(`${BASE_URL}/users/${orderId}/date`, 'PUT', payload)
}