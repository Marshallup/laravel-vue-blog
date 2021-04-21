import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// import post from './modules/post.module';
// import tag from './modules/tag.module';
// const admin = () => import('./modules/admin.module');
import admin from './modules/admin.module';

const store = new Vuex.Store({
    state: {
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        message: null,
        timerMessage: null,
        tags: null,
        categories: null,
        loading: false
    },
    getters: {
        getTags (state) {
            return state.tags;
        },
        getCategories(state) {
            return state.categories;
        }
    },
    mutations: {
        saveData(state, response) {
            state[response.type] = response.data
        },
        setLoader(state, status) {
            state.loading = status;
        },
        saveTagsAndCategories(state, response) {
            state.tags = response.tags;
            state.categories = response.categories;
        },
        setMessage(state, message) {
          state.message = message;
        },
        clearMessage(state) {
            state.message = null;
        }
    },
    actions: {
        // async loadData({ state, dispatch }, type) {
        //     this.loading = true;
        //     const response = await axios.get(`/api/${type}`)
        //         .then(response => {
        //             if (response.data.errors) return {errors: response.data.errors};
        //             // dispatch('setMessage', response.data);
        //             return response.data;
        //         })
        //         .catch(error => {
        //             console.log(error.response.data);
        //             // state.message = error.response.data.message;
        //             dispatch('setMessage', error.response.data.message);
        //             return 'error';
        //             }
        //         );
        //     this.loading = false;
        //     return response;
        //     // const data = response.data;
        //     // commit('saveData', {data, 'type': type});
        // },
        // async loadTagsAndCategories({ commit }) {
        //     // await setTimeout( () => {
        //     const response = await axios.get('/api/posts/create');
        //     commit('saveTagsAndCategories', response.data)
        //     // }, 5000)
        //
        // },
        async setMessage({state, commit}, message) {
            commit('setMessage', message);

            const timer = state.timerMessage;
            if(timer !== null) {
                clearInterval(timer);
            }
            state.timerMessage = setTimeout(function () {
                commit('clearMessage')
            }, 5000)
        },
        // async createPostTagCategory({ state, dispatch }, options) {
        //     const response = await axios.post(`/api/${options.path}`, options.inputs)
        //         .then(response => {
        //             if (response.data.errors) {
        //                 return {errors: response.data.errors}
        //             }
        //             dispatch('setMessage', response.data)
        //             return response
        //         })
        //         .catch(error => {
        //                 console.log(error.response.data)
        //                 state.message = error.response.data.message;
        //                 dispatch('setMessage', error.response.data.message)
        //                 return 'error';
        //             }
        //         );
        //     // console.log(response, 'index');
        //     return response;
        // },
        // async deleteEl({ state, dispatch }, opt) {
        //     state.loading = true;
        //     console.log(opt)
        //     const response = await axios.delete('/api/' + opt.path + '/' + parseInt(opt.event.target.dataset.id));
        //     state.loading = false;
        //     await dispatch('setMessage', response.data);
        //     opt.arr.splice(opt.idx, 1);
        // }
    },
    modules: {
        admin,
        // post,
        // tag
    }
});

export default store;
