<template>
    <div class="post">
        <!--================ Start banner Area =================-->
        <section class="banner-area relative">
            <div class="overlay overlay-bg"></div>
            <div class="banner-content text-center">
                <h1>Blog Details</h1>
                <p>Elementum libero hac leo integer. Risus hac parturient feugiat litora <br /> cursus hendrerit bibendum per </p>
            </div>
        </section>
        <!--================ End banner Area =================-->

        <!--================Blog Area =================-->
        <section class="blog_area section-gap single-post-area">
            <div class="container">
                <div class="row">
                    <router-view></router-view>

                    <sidebar-component></sidebar-component>
                </div>
            </div>
        </section>
        <!--================Blog Area =================-->
    </div>
</template>

<script>
import SidebarComponent from "../../components/SidebarComponent";

export default {
    name: "PostLayout",
    components: {
        SidebarComponent
    }
}
</script>

<style scoped>

</style>
