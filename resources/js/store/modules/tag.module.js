import axios from "axios";

export default {
    namespaced: true,
    state: {
        tags: null,
    },
    getters: {
        getTags (state) {
            return state.tags;
        }
    },
    mutations: {
        saveTags(state, response) {
            state.tags = response
        },
    },
    actions: {
        async loadTags({commit}) {
            const response = await axios.get('/api/tags/getAllTags');
            commit('saveTags', response.data)
        },
    }
}
