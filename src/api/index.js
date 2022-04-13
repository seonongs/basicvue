import axios from 'axios';

function fetchUserList() {
    return axios.get(`/api/user`)
}

export {
    fetchUserList,
}
