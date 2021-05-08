<template>
    <div class="col-lg-8">
        <div v-if="!posts">Нет постов!</div>
        <div v-else class="row">
            <div class="col-lg-6 col-md-6">
                <div
                    v-for="(post, idx) in posts"
                    class="single-amenities"
                    v-if="idx % 2 === 0"
                >
                    <div class="amenities-thumb">
                        <img
                            class="img-fluid w-100"
                            :src="post.thumbnail"
                            alt=""
                        />
                    </div>
                    <div class="amenities-details">
                        <h5>
                            <router-link :to="{name: 'Show-post', params: {slug: post.slug}}"
                            >
                                {{ post.title }}
                            </router-link>
                        </h5>
                        <div class="amenities-meta mb-10">
                            <a href="#" class=""
                            >
                                <span class="ti-calendar"></span>
                                {{ post.created_at | dateFormat_Do_MMMM_YYYY }}
                            </a
                            >
                            <a href="#" class="ml-20"
                            ><span class="ti-comment"></span>05</a
                            >
                        </div>
                        <p v-html="post.description">
                        </p>

                        <div class="d-flex justify-content-between mt-20">
                            <div>
                                <a href="#" class="blog-post-btn">
                                    Читать
                                    <span class="ti-arrow-right"></span>
                                </a>
                            </div>
                            <div class="category">
                                <a href="#">
                                    <span class="ti-folder mr-1"></span> {{ post.category.title }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div
                    v-for="(post, idx) in posts"
                    class="single-amenities"
                    v-if="idx % 2 !== 0"
                >
                    <div class="amenities-thumb">
                        <img
                            class="img-fluid w-100"
                            :src="post.thumbnail"
                            alt=""
                        />
                    </div>
                    <div class="amenities-details">
                        <h5>
                            <router-link :to="{name: 'Show-post', params: {slug: post.slug}}"
                            >
                                {{ post.title }}
                            </router-link>
                        </h5>
                        <div class="amenities-meta mb-10">
                            <a href="#" class=""
                            >
                                <span class="ti-calendar"></span>
                                {{ post.created_at | dateFormat_Do_MMMM_YYYY }}
                            </a
                            >
                            <a href="#" class="ml-20"
                            ><span class="ti-comment"></span>05</a
                            >
                        </div>
                        <p v-html="post.description">
                        </p>

                        <div class="d-flex justify-content-between mt-20">
                            <div>
                                <a href="#" class="blog-post-btn">
                                    Читать <span class="ti-arrow-right"></span>
                                </a>
                            </div>
                            <div class="category">
                                <a href="#">
                                    <span class="ti-folder mr-1"></span> {{ post.category.title }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppPagination
         :cur_page="cur_page"
         :last_page="last_page"
        ></AppPagination>
    </div>
</template>

<script>
import AppPagination from "./AppPagination";
export default {
    name: "PostsComponent.vue",
    computed: {
        posts () {
            // this.$store.dispatch('loadData', 'posts');
            return this.$store.getters['getPosts'];
        },
        cur_page () {
            return this.$store.state['cur_page'];
        },
        last_page () {
            return this.$store.state['last_page'];
        }
    },
    components: {
        AppPagination
    },
    mounted () {
        // console.log('main page');


        // this.$store.dispatch('loadData', 'posts');


        // console.log(this.posts)
    },
}
</script>

<style scoped>

</style>
