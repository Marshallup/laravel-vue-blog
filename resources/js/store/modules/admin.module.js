import axios from "axios";

export default {
    namespaced: true,
    state: {
        posts: null,
        categories: null,
        tags: null
    },
    getters: {
        getTags(state) {
            return state.tags;
        },
        getCategories(state) {
            return state.categories;
        },
        getPosts(state) {
            return state.posts;
        }
    },
    mutations: {
        saveData(state, data) {
            state[data.name] = data.arr;
        },
        clearData(state, name) {
            state[name] = null;
        }
    },
    actions: {
        async loadDataCreatePost({ commit }) {
            commit('setLoader', true, {root: true});
            const response = await axios.get('/api/posts/create');
            commit('saveData', {name: 'tags', arr: response.data.tags});
            commit('saveData', {name: 'categories', arr: response.data.categories})
            commit('setLoader', false, {root: true});
        },
        async loadData({ state, dispatch, commit, rootState }, type) {
            // if (!state[type]) {
                // console.log('ss')
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
        async createTagCategory({ state, commit, dispatch }, options) {
            const response = await axios.post(`/api/${options.path}`, options.inputs)
                .then(response => {
                    if (response.data.errors) {
                        return {errors: response.data.errors}
                    }
                    dispatch('setMessage', response.data, {root: true})
                    return response
                })
                .catch(error => {
                        console.log(error.response.data)
                        state.message = error.response.data.message;
                        dispatch('setMessage', error.response.data.message, {root: true})
                        return 'error';
                    }
                );
            return response;
        },
        async createPost({ state, commit, dispatch }, options) {
            const inputs = options.inputs;
            const formData = new FormData();
            for (let k in inputs) {
                // console.log(k, options.inputs[k])
                if (k === 'tag_id') continue;
                formData.append(k, inputs[k])
                // console.log(k, inputs[k])
            }
            formData.append('tag_id',JSON.stringify(inputs.tag_id));
            // console.log(formData.get('tag_id'))
            formData.append('thumbnail', options.inputs.thumbnail);
            // console.log(formData.get('thumbnail'))
            const response = await axios.post(`/api/${options.path}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if (response.data.errors) {
                        return {errors: response.data.errors}
                    }
                    commit('saveData', {name: 'posts', arr: null}, {root: true});
                    dispatch('setMessage', response.data, {root: true})

                    // dispatch('loadData', options.path);
                    // commit('clearData', options.path);
                    return response
                })
                .catch(error => {
                        console.log(error.response.data)
                        state.message = error.response.data.message;
                        dispatch('setMessage', error.response.data.message, {root: true})
                        return 'error';
                    }
                );
            console.log(response.data)
            return response;
        },
        async deleteEl({ state, dispatch }, opt) {
            state.loading = true;
            const response = await axios.delete('/api/' + opt.path + '/' + parseInt(opt.event.target.dataset.id));
            if (opt.path === 'tags' || opt.path === 'categories') {
                dispatch('loadData', 'posts');
            }
            state.loading = false;
            dispatch('setMessage', response.data, {root: true});
            opt.arr.splice(opt.idx, 1);
        }
    }
}
