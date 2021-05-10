<template>
<!--    <keep-alive>-->
<!--        <component v-if="template" :is="template + '-template'"></component>-->
<!--        <NotFound v-else />-->
        <router-view></router-view>
<!--    </keep-alive>-->
</template>

<script>
// import TheHeader from "./components/TheHeader";
// import TheFooter from "./components/TheFooter";
// import AppMessage from "./components/AppMessage";
// import HomeLayout from "./views/layouts/HomeLayout";
// import PostLayout from "./views/layouts/PostLayout";
export default {
    name: "App.vue",
    computed: {
        layout () {
            return this.$route.meta.layout
        },
        template () {
            return this.$route.meta.template
        }
    },
    components: {
        // AppMessage,
        // TheHeader,
        // TheFooter,
        // 'HomeLayout': () => import('./views/layouts/HomeLayout'),
        // 'PostLayout': () => import('./views/layouts/PostLayout'),
        // 'AdminLayout': () => import('./views/layouts/AdminLayout'),
        'AdminTemplate': () => import('./views/templates/AdminTemplate'),
        'BlogTemplate': () => import('./views/templates/BlogTemplate'),
        'NotFound': () => import('./views/NotFound')
        // HomeLayout,
        // PostLayout
    }
}
</script>

<style scoped>

</style>
