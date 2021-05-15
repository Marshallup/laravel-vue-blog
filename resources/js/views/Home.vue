<template>
    <section class="blog-post-area section-gap relative">
<!--        <router-view></router-view>-->
        <div class="container">
            <div class="row">
                <!-- Start Blog Posts -->
                <the-list-posts></the-list-posts>
                <!-- End Blog Posts -->

                <!-- Start Blog Post Siddebar -->
                <sidebar-component></sidebar-component>
                <!-- End Blog Post Siddebar -->
            </div>
        </div>
    </section>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent";
import TheListPosts from "../views/blog/TheListPost";

export default {
    name: "Home.vue",
    components: {
        SidebarComponent,
        TheListPosts
    },
}
</script>

<style scoped>

</style>
