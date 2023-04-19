import sendRequest from "./send-request";
const BASE_URL = '/api/packages';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function addToOrder(packageId) {
    return sendRequest(`${BASE_URL}/${packageId}`, 'POST')
}

// may need thjis for package detail comp
// export function getById(id) {
//     return sendRequest(`${BASE_URL}/${id}`);
// }