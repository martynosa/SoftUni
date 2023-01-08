const baseURL = `http://localhost:3030`;
const getCarsURL = `${baseURL}/data/cars?sortBy=_createdOn%20desc`;
const createCarURL = `${baseURL}/data/cars`;
const deletCarURL = `${baseURL}/data/cars`;
const editResourceURL = `${baseURL}/data/cars`;



async function getAllResources() {
    let getResourceRequest = await fetch(getCarsURL, {
        method: 'GET'
    });
    let getResourceResult = await getResourceRequest.json();
    return getResourceResult;
};

async function createResource(body) {
    let createResourceRequest = await fetch(createCarURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(body)
    });

    let createResourceResult = await createResourceRequest.json();
    return createResourceResult;
};

async function getSingleResource(id) {
    let getSingleResourceRequest = await fetch(`${createCarURL}/${id}`, {
        method: 'GET'
    });
    let getSingleResourceResult = await getSingleResourceRequest.json();
    return getSingleResourceResult;
};

async function deleteResource(id) {
    let deleteResourceRequest = await fetch(`${deletCarURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': localStorage.getItem('accessToken')
        }
    });
    let deleteResourceResult = await deleteResourceRequest.json();
    return deleteResourceResult;
};

async function getUserResources(userId) {
    let getUserResourcesRequest = await fetch(`${baseURL}/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('accessToken')
        }
    });
    let getUserResourcesResult = await getUserResourcesRequest.json();
    return getUserResourcesResult;
};

async function editResource(id, resourceBody) {
    let editResourceRequest = await fetch(`${editResourceURL}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': localStorage.getItem('accessToken')
        },
        body: JSON.stringify(resourceBody)
    });

    let editResourceResult = await editResourceRequest.json();
    return editResourceResult;

};

//bonus search request
async function search(searchInput) {
    let searchRequest = await fetch(`${baseURL}/data/cars?where=year%3D${searchInput}`, {
        methood: 'GET'
    });
    let searcResult = await searchRequest.json();
    return searcResult;
};


export const rServices = {
    getAllResources,
    createResource,
    getSingleResource,
    deleteResource,
    getUserResources,
    editResource,
    search
};
