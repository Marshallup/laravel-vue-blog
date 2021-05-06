<template>
    <AppPreloader v-if="loading"/>
    <div v-else class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card mdl-shadow--2dp employer-form">
            <div class="mdl-card__title">
                <h5 class="mdl-card__title-text text-color--white">Создание поста</h5>
            </div>
            <div class="mdl-card__supporting-text">
                <form @submit.prevent="createPost">
                    <!--                    <form action="/api/posts" method="post" >-->
                    <div class="form-inputs-group">
                        <div class="form-group">
                            <label for="title">Email address</label>
                            <input autocomplete="new-title" v-model="inputs.title" name="title" type="text" class="form-control" id="title" aria-describedby="title" placeholder="Введите название поста">
                            <div v-if="errors.title" class="error">{{ errors.title[0] }}</div>
                            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <!--                            <div class="form-group">-->
                        <!--                                <label for="description">Описание</label>-->
                        <!--                                <input v-model="inputs.description" name="description" type="text" class="form-control" id="description" placeholder="Описание поста">-->
                        <!--                                <div v-if="errors.description" class="error">{{ errors.description[0] }}</div>-->
                        <!--                            </div>-->
                        <div class="form-group">
                            <label>Описание</label>
                            <AppCKEditorComponent
                                :items="['bold', 'italic', 'link', 'undo', 'redo',]"
                                v-model="inputs.description"
                            />
                            <div v-if="errors.description" class="error">{{ errors.description[0] }}</div>
                        </div>
                        <div class="form-group">
                            <label>Выберите изображение</label>
                            <div class="input-group">
                                <div class="custom-file">
                                    <input @change="processImg($event)" type="file" class="custom-file-input" id="inputGroupFile02">
                                    <label style="margin-top: 0;" class="custom-file-label" for="inputGroupFile02">Choose file</label>
                                </div>
                                <div class="input-group-append">
                                    <span class="input-group-text">Upload</span>
                                </div>
                            </div>
                            <div class="error" v-if="errors.thumbnail">{{ errors.thumbnail[0] }}</div>
                        </div>
                        <div v-if="tags" class="form-group">
                            <label for="tag">Выберите тег</label>
                            <select multiple v-model="inputs.tag_id" name="tag_id[]" class="form-control" id="tag">
                                <option v-for="(tag, id) in tags" :key="id" :value="id">
                                    {{ tag }}
                                </option>
                            </select>
                        </div>
                        <div v-if="categories" class="form-group">
                            <label for="categories">Выберите категорию</label>
                            <select v-model="inputs.category_id" name="category_id" class="form-control" id="categories">
                                <option v-for="(category, id) in categories" :key="id" :value="id">
                                    {{ category }}
                                </option>
                            </select>
                            <div v-if="errors.category_id" class="error">{{ errors.category_id[0] }}</div>
                        </div>
                    </div>
                    <!--                        <div class="form-group">-->
                    <!--                            <label for="content">Контент</label>-->
                    <!--                            <input v-model="inputs.content" name="content" type="text" class="form-control" id="content" placeholder="Контент">-->
                    <!--                            <div v-if="errors.content" class="error">{{ errors.content[0] }}</div>-->
                    <!--                        </div>-->
                    <div class="form-group">
                        <label>Контент</label>
                        <AppCKEditorComponent v-model="inputs.content" />
                        <div v-if="errors.content" class="error">{{ errors.content[0] }}</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Сохранить</button>
                </form>
                <!--                    <ckeditor :editor="editor" v-model="inputs.content" :config="editorConfig"></ckeditor>-->
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import AppCKEditorComponent from "../../../components/AppCKEditorComponent";

export default {
    data () {
        return {
            loading: false,
            inputs: {
                title: '',
                description: '',
                content: '',
                thumbnail: '',
                tag_id: [],
                category_id: ''
            },
            errors: {}
        }
    },
    methods: {
        async createPost () {
            const inputs = this.inputs;
            console.log(inputs)

            const response = await this.$store.dispatch('admin/createPost', { path: 'posts', inputs })
            if (response.errors) {
                console.log(response.errors)
                this.errors = response.errors;
            } else {
                console.log('yes')
                for (const input in this.inputs) {
                    if (input === 'tag_id') {
                        inputs[input] = [];
                    } else {
                        inputs[input] = '';
                    }
                }
            }

            // this.loading = false;
        },
        processImg(event) {
            console.log(event.target.files[0])
            this.inputs.thumbnail = event.target.files[0]
        },
        getDataContent(data) {
            console.log(data)
        },
    },
    computed: {
        tags () {
            return this.$store.getters['admin/getTags'];
        },
        categories () {
            return this.$store.getters['admin/getCategories'];
        }
    },
    components: {
        AppCKEditorComponent
    },
    mounted() {
        this.$store.dispatch('admin/loadDataCreatePost');
    },
}
</script>

<style scoped>
.mdl-card__supporting-text {
    color: black;
}
.employer-form {
    width: auto;
}
.form-inputs-group {
    margin: 0 auto;
    max-width: 600px;
}
</style>
