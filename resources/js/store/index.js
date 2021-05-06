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
        loading: false,
        posts: false,
        post: false
    },
    getters: {
        getTags (state) {
            return state.tags;
        },
        getCategories(state) {
            return state.categories;
        },
        getPosts(state) {
            // console.log(state)
            return state.posts;
        },
        getPost(state) {
            return state.post;
        }
    },
    mutations: {
        saveData(state, data) {
            // console.log(data)
            state[data.name] = data.arr;
        },
        clearData(state, name) {
            state[name] = null;
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
        },
    },
    actions: {
        async loadData({ state, dispatch, commit, rootState }, type) {
            // if (!state[type]) {
            commit('setLoader', true, {root: true})
            // dispatch('setLoader', true, {root: true})
            const response = await axios.get(`/api/${type}`)
                .then(response => {
                    if (response.data.errors) return {errors: response.data.errors};
                    // console.log(response)
                    return response.data;
                })
                .catch(error => {
                        console.log(error.response.data);
                        dispatch('setMessage', error.response.data.message, { root: true });
                        return 'error';
                    }
                );
            commit('saveData', {name: type, arr: response});
            commit('setLoader', false, {root: true})
        },
        async loadSingle({commit, dispatch}, info) {
            commit('setLoader', true, {root: true});

            const response = await axios.get(`/api/${info.type}/${info.slug}`)
                .then(response => {
                    if (response.data.errors) return {errors: response.data.errors};
                    // console.log(response)
                    commit('saveData', {name: info.name, arr: response.data});
                    return response.data;
                })
                .catch(error => {
                        console.log(error.response.data);
                        dispatch('setMessage', error.response.data.message, { root: true });
                        return 'error';
                    }
                );
            commit('setLoader', false, {root: true})
        },
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
    },
    modules: {
        admin,
        // post,
        // tag
    }
});

export default store;
