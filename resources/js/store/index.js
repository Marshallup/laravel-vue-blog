import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// import post from './modules/post.module';
// import tag from './modules/tag.module';
// const admin = () => import('./modules/admin.module');
import admin from './modules/admin.module';
import sidebarCategories from './modules/sidebar/categories.module';

const store = new Vuex.Store({
    state: {
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        message: null,
        timerMessage: null,
        tags: null,
        categories: null,
        loading: false,
        posts: [],
        post: false,
        cur_page: 1,
        last_page: 1
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
            console.log(data, 'saveData')
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
        setCurrentPage(state, page) {
            state.cur_page = page;
        },
        setLastPage(state, page) {
            state.last_page = page;
        }
    },
    actions: {
        async getListsElements({commit, dispatch}, obj) {
            commit('setLoader', true, {root: true});
            let pageQuery = 'page=1';
            if (obj.page) {
                pageQuery = 'page=' + obj.page;
            }
            const response = await axios.get(`/api/${obj.path}?${pageQuery}`)
                .then(response => {
                    if (response.data.errors) return {errors: response.data.errors};
                    console.log(response.data, 'store')
                    commit('setCurrentPage', response.data.current_page);
                    commit('setLastPage', response.data.last_page);
                    return response.data.data;
                })
                .catch(error => {
                        console.log(error.response.data);
                        dispatch('setMessage', error.response.data.message, { root: true });
                        return 'error';
                    }
                );
            commit('saveData', {name: obj.type, arr: response});
            commit('setLoader', false, {root: true});
            // console.log(response)
        },
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
        sidebarCategories
        // post,
        // tag
    }
});

export default store;
