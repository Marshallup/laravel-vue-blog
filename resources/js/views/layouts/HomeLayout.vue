<template>
    <div class="main">
<!--        <keep-alive>-->
        <!--================ Start banner Area =================-->
        <the-home-slider></the-home-slider>
        <!--================ End banner Area =================-->
<!--        </keep-alive>-->
        <!--================ Start Blog Post Area =================-->
        <router-view></router-view>
        <!--================ End Blog Post Area =================-->
    </div>
</template>

<script>
import TheHomeSlider from "../../components/TheHomeSlider";

export default {
name: "MainLayout",
    components: {
        TheHomeSlider,
    }
}
</script>

<style scoped>

</style>
