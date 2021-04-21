import axios from "axios";

export default {
    namespaced: true,
    state: {
        categories: null
    },
    getters: {
        getCategories(state) {
            return state.categories;
        }
    },
    mutations: {
        saveTags(state, response) {
            state.tags = response
        },
    },
    actions: {
        async loadData({ commit }, type) {
            const response = await axios.get(`/api/${type}`);
            const data = response.data;
            commit('saveData', {data, 'type': type});
        },
        async loadTagsAndCategories({ commit }) {
            const response = await axios.get('/api/posts/create');
            commit('saveTagsAndCategories', response.data)

        },
    }
}
