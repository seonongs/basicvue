import {fetchUserDetail, fetchUserList} from "@/api";

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
    },
    FETCH_USER_DETAIL({commit}, seq) {
        fetchUserDetail(seq)
            .then(({data}) => {
                commit('SET_USER_DETAIL', data)
                console.log('SET_USER_DETAIL: ', data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
