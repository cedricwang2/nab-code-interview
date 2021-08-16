import axios from 'axios';

const authencateUser = (username, password) => {
    return axios.post('http://localhost:8000/authenticate', {
        username,
        password
    });
}

export {authencateUser}