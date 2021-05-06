<template>
    <div>
        <h5>Single post page Admin!</h5>
        <router-link
            :to="{ name: 'listPosts'}"
        >
            Вернуться к списку постов
        </router-link>
    </div>
</template>

<script>
export default {
    name: "SinglePost"
}
</script>

<style scoped>

</style>
