<template>
    <transition name="slide-fade">
        <div class="modal-message alert alert-success" role="alert" v-if="message">
            <h4 class="alert-heading">{{ message }}</h4>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        message () {
            return this.$store.state.message;
        }
    }
}
</script>

<style scoped>
/*.fade-enter-active, .fade-leave-active {*/
/*    transition: opacity .5s;*/
/*}*/
/*.fade-enter, .fade-leave-to !* .fade-leave-active до версии 2.1.8 *! {*/
/*    opacity: 0;*/
/*}*/

.modal-message {
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 10px);
}

/* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translate(-50%, -50px);
    opacity: 0;
}
</style>
