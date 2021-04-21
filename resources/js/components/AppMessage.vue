<template>
    <div v-if="message">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "AppMessage",
    computed: {
        message () {
            return this.$store.state.message;
        }
    }
}
</script>

<style scoped>

</style>
