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
        // async getCategoryPosts({commit, dispatch}, obj) {
        //     commit('setLoader', true, {root: true});
        //     let pageQuery = 'page=1';
        //     if (obj.page) {
        //         pageQuery = 'page=' + obj.page;
        //     }
        //     const response = await axios.get(`/api/${obj.path}?${pageQuery}`)
        //         .then(response => {
        //             if (response.data.errors) return {errors: response.data.errors};
        //             // console.log(response.data)
        //             commit('setCurrentPage', response.data.current_page);
        //             commit('setLastPage', response.data.last_page);
        //             return response.data.data;
        //         })
        //         .catch(error => {
        //                 console.log(error.response.data);
        //                 dispatch('setMessage', error.response.data.message, { root: true });
        //                 return 'error';
        //             }
        //         );
        //     commit('saveData', {name: obj.type, arr: response});
        //     commit('setLoader', false, {root: true});
        //     // console.log(response)
        // },
    }
}
