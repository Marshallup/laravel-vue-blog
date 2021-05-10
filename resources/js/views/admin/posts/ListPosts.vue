<template>
    <h2 v-if="!posts || posts.length === 0">Нет постов</h2>
    <div v-else class="mdl-grid ui-cards">
        <div v-for="(post, idx) in posts" :key="post.id" class="mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone">
            <div class="mdl-card mdl-shadow--2dp">
                <div
                    :style="{ background: backgroundImage(post) }"
                    :class="removeDefImg(post)"
                    class="mdl-card__title"
                >
                    <h2 class="mdl-card__title-text">{{ post.title }}</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    <small v-if="post.tags.length === 0">Нет тегов!</small>
                    <small v-else v-for="tag in post.tags" >{{ tag.title }}</small>

                    <span v-html="post.description"></span>
                    <br><br>
                    <span v-if="post.category">
                        <b>Категория:</b> {{ post.category.title }}
                    </span>
                    <br>
                    <b>Дата создания:</b> {{ post.created_at | dateFormat_dddd_H_mm_A }}
                    <br>
                    <div class="post-buttons">
                        <router-link
                            :to="{name: 'AdminSinglePost', params: {slug: post.slug}}"
                        >
                            <b
                                :data-id="post.id"
                                class="post-show"
                            >
                                Смотреть пост
                            </b>
                        </router-link>
                        <b
                            :data-id="post.id"
                            @click="deletePost($event, idx)"
                            class="post-delete"
                        >Удалить пост</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
      return {
      }
    },
    computed: {
        posts () {
          return this.$store.getters['admin/getPosts'];
        }
    },
    methods: {
        deletePost(event, idx) {
            this.$store.dispatch('admin/deleteEl', {path: 'posts', idx, event: event, arr: this.posts})
        },
        backgroundImage (post) {
            if (post.thumbnail) {
                return 'linear-gradient(transparent,transparent,transparent,transparent,transparent,rgba(0,0,0,.1),rgba(0,0,0,.2),rgba(0,0,0,.4)), url(' + post.thumbnail +') top center/cover no-repeat';
            }
            return null;
        },
        removeDefImg(post) {
            if (post.thumbnail) {
                return null;
            }
            return 'remove-def-bg-img';
        }
    },
    mounted () {
        console.log('posts ')
        this.$store.dispatch('admin/loadData', 'posts');
    },
}
</script>

<style scoped>
    .post-buttons {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .post-show {
        cursor: pointer;
        color: green;
    }
    .post-delete {
        cursor: pointer;
        color: darkred;
    }
    .remove-def-bg-img {
        background: #333 !important;
        height: auto !important;
    }
</style>
