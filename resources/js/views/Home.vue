<template>
    <section class="blog-post-area section-gap relative">
<!--        <router-view></router-view>-->
        <div class="container">
            <div class="row">
                <!-- Start Blog Posts -->
                <posts-component></posts-component>
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
import PostsComponent from "../components/PostsComponent";

export default {
    name: "Home.vue",
    components: {
        SidebarComponent,
        PostsComponent
    }
}
</script>

<style scoped>

</style>
