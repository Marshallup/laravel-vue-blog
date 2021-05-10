<template>
    <div v-if="categories" class="single-sidebar-widget post-category-widget">
        <h4 class="category-title">Категории</h4>
        <ul class="cat-list mt-20">
            <li
                v-for="category in categories"
            >
                <router-link
                    :to="'#'"
                    class="d-flex justify-content-between"
                >
                    <p>{{ category.title }}</p>
                    <p>{{ category.posts_count}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // name: "AppPopularCategories"
    computed: {
      categories () {
          return this.$store.getters['sidebarCategories/getCategories'];
      }
    },
    mounted() {
        this.$store.dispatch('sidebarCategories/loadCategories');
        // console.log('www')
    }
}
</script>

<style scoped>

</style>
