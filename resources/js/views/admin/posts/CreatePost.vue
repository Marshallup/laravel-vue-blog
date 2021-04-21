<template>
    <AppPreloader v-if="loading"/>
            <div v-else class="mdl-card mdl-shadow--2dp employer-form">
                <div class="mdl-card__title">
                    <h5 class="mdl-card__title-text text-color--white">Создание поста</h5>
                </div>
                <div class="mdl-card__supporting-text">
                    <form @submit.prevent="createPost">
<!--                    <form action="/api/posts" method="post" >-->
                        <div class="form-group">
                            <label for="title">Email address</label>
                            <input autocomplete="new-title" v-model="inputs.title" name="title" type="text" class="form-control" id="title" aria-describedby="title" placeholder="Введите название поста">
                            <div v-if="errors.title" class="error">{{ errors.title[0] }}</div>
                            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="description">Описание</label>
                            <input v-model="inputs.description" name="description" type="text" class="form-control" id="description" placeholder="Описание поста">
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
                        <div class="form-group">
                            <label for="content">Контент</label>
                            <input v-model="inputs.content" name="content" type="text" class="form-control" id="content" placeholder="Контент">
                            <div v-if="errors.content" class="error">{{ errors.content[0] }}</div>
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
                        </div>
                        <button type="submit" class="btn btn-primary">Сохранить</button>
                    </form>
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
            </div>
</template>

<script>
import axios from "axios";
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'
import CKFinder from '/ckfinder/ckfinder.js';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder'

export default {
    data () {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                language: 'ru',
                // plugins: [],
                toolbar: {
                    items: [
                        'ckfinder',
                        'bold',
                        'italic',
                        'link',
                        'undo',
                        'redo'
                    ]
                },
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    ]
                },
                ckfinder: {
                    uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
                    options: {
                        resourceType: 'Images'
                    },
                    // openerMethod: 'popup'
                }
            },
            tags: null,
            categories: null,
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
            // this.loading = true;
            const inputs = this.inputs;
            // let formData = new FormData();
            const response = await this.$store.dispatch('admin/createPost', { path: 'posts', inputs })
            if (response.errors) {
                console.log(response.errors)
                this.errors = response.errors;
            }

            // this.loading = false;
        },
        async getInfoForCreatePost() {
            this.loading = true;
            const response = await axios.get('/api/posts/create');
            this.tags = response.data.tags;
            this.categories = response.data.categories;
            this.loading = false;
        },
        processImg(event) {
            console.log(event.target.files[0])
            this.inputs.thumbnail = event.target.files[0]
        }
    },
    computed: {
    },
    watch: {
        // call again the method if the route changes
        '$route': 'getInfoForCreatePost'
    },
    components: {
        'ckeditor': CKEditor.component
    },
    created () {
        // import('/ckfinder/ckfinder.js')
        this.getInfoForCreatePost();
    },
    mounted() {
        // require('../../../../ckfinder/ckfinder.js')
        // require('@ckeditor/ckeditor5-ckfinder/src/ckfinder');
        // console.log(this.editor)
        // console.log(Array.from( this.editor.componentFactory.names()));
    },
    beforeDestroy() {
        // this.editor.destroy()
    },
}
</script>

<style scoped>
    .mdl-card__supporting-text {
        color: black;
    }
</style>
