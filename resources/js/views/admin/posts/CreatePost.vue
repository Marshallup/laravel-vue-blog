<template>
    <AppPreloader v-if="loading"/>
    <div v-else class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card mdl-shadow--2dp employer-form">
            <div class="mdl-card__title">
                <h5 class="mdl-card__title-text text-color--white">Создание поста</h5>
            </div>
            <div class="mdl-card__supporting-text">
                <form @submit.prevent="createPost">
                    <div class="form-inputs-group">
                        <div class="form-group">
                            <label for="title">Название поста</label>
                            <input autocomplete="new-title" v-model="inputs.title" name="title" type="text" class="form-control" id="title" aria-describedby="title" placeholder="Введите название поста">
                            <div v-if="errors.title" class="error">
                                {{ errors.title[0] }}
                            </div>

<!--                            <small class="form-text text-muted">-->
<!--                                We'll never share your email with anyone else.-->
<!--                            </small>-->
                        </div>
                        <div class="form-group">
                            <label>Краткое описание</label>

                            <AppCKEditorComponent
                                :items="['bold', 'italic', 'link', 'undo', 'redo',]"
                                v-model="inputs.description"
                            />

                            <div v-if="errors.description" class="error">
                                {{ errors.description[0] }}
                            </div>
                        </div>

                        <TheInputThumbnail
                            v-on:process-img="processImg"
                            :error="errors"
                        />

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
                    <div class="form-group">
                        <label>Контент</label>
                        <AppCKEditorComponent v-model="inputs.content" />
                        <div v-if="errors.content" class="error">{{ errors.content[0] }}</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import TheInputThumbnail from "../../../components/elements/TheInputThumbnail";
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
        getDataContent(data) {
            console.log(data)
        },
        processImg (val) {
            this.inputs.thumbnail = val;
        }
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
        TheInputThumbnail,
        AppCKEditorComponent
    },
    mounted() {
        this.$store.dispatch('admin/loadDataCreatePost');
    },
}
</script>

<style scoped>

</style>
