<template>
    <div class="mdl-card mdl-shadow--2dp employer-form">
        <div class="mdl-card__title">
            <h5 class="mdl-card__title-text text-color--white">Создание Тега</h5>
        </div>
        <div class="mdl-card__supporting-text">
            <form @submit.prevent="createTag">
<!--            <form action="/api/tags" method="post" >-->
                <div class="form-group">
                    <label for="title">Email address</label>
                    <input v-model="title" name="title" type="text" class="form-control" id="title" aria-describedby="title" placeholder="Введите название поста">
                    <div v-if="errors.title" class="error">{{ errors.title[0] }}</div>
                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" class="btn btn-primary">Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            title: null,
            errors: {}
        }
    },
    methods: {
        async createTag () {
            const inputs = { title: this.title};
            const response = await this.$store.dispatch('admin/createTagCategory', { path: 'tags', inputs })
            this.title = '';
            if (response.errors) {
                this.errors = response.errors;
            }
        },
    },
    computed: {
    },
}
</script>

<style scoped>
</style>
