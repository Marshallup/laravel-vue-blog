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
        saveCategories(state, response) {
            state.categories = response
        },
    },
    actions: {
        async loadCategories({ commit }, type) {
            const response = await axios.get('/api/categories/getPopularCategories')
                .then(res => {
                    return res.data;
                })
                .catch(res => {
                    return null;
                })
            commit('saveCategories', response);
            // console.log(response, 'cat');
            // const data = response.data;
            // commit('saveData', {data, 'type': type});
        },
    }
}
