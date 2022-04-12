import axios from 'axios';

function fetchUserList() {
    return axios.get(`http://localhost:8080/api/user`)
}

export {
    fetchUserList,
}
