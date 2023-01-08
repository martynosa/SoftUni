const baseURL = `http://localhost:3030`;

async function getAllResources() {
    let getResourceRequest = await fetch(`${baseURL}/data/books?sortBy=_createdOn%20desc`, {
        method: 'GET'
    });
    let getResourceResult = await getResourceRequest.json();
    return getResourceResult;
};

async function createResource(body) {
    let createResourceRequest = await fetch(`${baseURL}/data/books`, {
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
    let getSingleResourceRequest = await fetch(`${baseURL}/data/books/${id}`, {
        method: 'GET'
    });
    let getSingleResourceResult = await getSingleResourceRequest.json();
    return getSingleResourceResult;
};

async function deleteResource(id) {
    let deleteResourceRequest = await fetch(`${baseURL}/data/books/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': localStorage.getItem('accessToken')
        }
    });
    let deleteResourceResult = await deleteResourceRequest.json();
    return deleteResourceResult;
};

async function getUserResources(userId) {
    let getUserResourcesRequest = await fetch(`${baseURL}/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('accessToken')
        }
    });
    let getUserResourcesResult = await getUserResourcesRequest.json();
    return getUserResourcesResult;
};

async function editResource(id, resourceBody) {
    let editResourceRequest = await fetch(`${baseURL}/data/books/${id}`, {
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

export const rServices = {
    getAllResources,
    createResource,
    getSingleResource,
    deleteResource,
    getUserResources,
    editResource,
};
