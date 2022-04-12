import { createStore } from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import state from "@/store/state";

export default createStore({
    actions: actions,
    mutations: mutations,
    state: state,

});

