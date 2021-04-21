import axios from "axios";

export default {
    namespaced: true,
    state: {
        posts: null,
        postsCreate: null
    },
    getters: {
        getPosts (state) {
            return state.posts;
        }
    },
    mutations: {
        saveData(state, response) {
            state[response.type] = response.data
        },
        saveTagsAndCategories(state, response) {
            state.tags = response.tags;
            state.categories = response.categories;
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
