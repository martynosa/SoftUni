const baseURL = `http://localhost:3030`;
const getMemesURL = `${baseURL}/data/memes?sortBy=_createdOn%20desc`;
const createMemeURL = `${baseURL}/data/memes`;
const deleteMemeURL = `${baseURL}/data/memes`;
const editResourceURL = `${baseURL}/data/memes`;



async function getAllResources() {
    let getResourceRequest = await fetch(getMemesURL, {
        method: 'GET'
    });
    let getResourceResult = await getResourceRequest.json();
    return getResourceResult;
};

async function createResource(body) {
    let createResourceRequest = await fetch(createMemeURL, {
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
    let getSingleResourceRequest = await fetch(`${createMemeURL}/${id}`, {
        method: 'GET'
    });
    let getSingleResourceResult = await getSingleResourceRequest.json();
    return getSingleResourceResult;
};

async function deleteResource(id) {
    let deleteResourceRequest = await fetch(`${deleteMemeURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': localStorage.getItem('accessToken')
        }
    });
    let deleteResourceResult = await deleteResourceRequest.json();
    return deleteResourceResult;
};

async function getUserResources(userId) {
    let getUserResourcesRequest = await fetch(`${baseURL}/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, {
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
