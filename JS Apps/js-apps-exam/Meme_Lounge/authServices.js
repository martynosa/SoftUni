const baseURL = `http://localhost:3030`;
const loginURL = `${baseURL}/users/login`;
const registerURL = `${baseURL}/users/register`;
const logoutURl = `${baseURL}/users/logout`

async function loginReq(user) {
    let loginRequest = await fetch(loginURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application\json'
        },
        body: JSON.stringify(user)
    });

    let loginResult = await loginRequest.json();
    console.log(loginResult);

    if (!loginRequest.ok) {
        return window.alert('something is wrong')
    }


    saveUserData(loginResult);
};

async function registerReq(user) {
    let registerRequest = await fetch(registerURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application\json'
        },
        body: JSON.stringify(user)
    });

    let registerResult = await registerRequest.json();

    if (!registerRequest.ok) {
        return window.alert('something is wrong')
    }

    saveUserData(registerResult);
};

function saveUserData(userServerData) {
    localStorage.setItem('id', userServerData._id)
    localStorage.setItem('username', userServerData.username)
    localStorage.setItem('email', userServerData.email)
    localStorage.setItem('accessToken', userServerData.accessToken)
    localStorage.setItem('gender', userServerData.gender)
};

async function logoutReq() {
    let authToken = localStorage.getItem('accessToken')
    let logoutRequest = await fetch(logoutURl, {
        method: 'GET',
        headers: {
            'X-Authorization': authToken
        }
    });

    if (!logoutRequest.ok) {
        return
    }

    localStorage.clear()
};

function isAuthenticated() {

    let authToken = localStorage.getItem('accessToken');

    if (authToken !== null) {
        return true;
    }

    return false;
}

export const authServices = {
    loginReq,
    registerReq,
    logoutReq,
    isAuthenticated
}