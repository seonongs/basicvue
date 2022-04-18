import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.baseURL = 'http://49.50.173.46:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function fetchUserList() {
    return axios.get(`/api/user/findAllUsers`)
}
function fetchUserDetail(seq) {
    return axios.get(`/api/user/findUserBySeq/${seq}`)
}

export {
    fetchUserList,
    fetchUserDetail,
}
