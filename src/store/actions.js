import { fetchUserList } from "@/api";

export default {
    FETCH_USER_LIST({commit}) {
        fetchUserList()
            .then(({data}) => {
                commit('SET_USER_LIST', data)
                console.log('SET_USER_LIST: ', data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
