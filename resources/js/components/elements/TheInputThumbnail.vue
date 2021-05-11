<template>
    <div class="form-group">
        <label>Выберите изображение</label>
        <div class="input-group">
            <div class="custom-file">
                <input @change="processImg($event)" type="file" class="custom-file-input" id="inputGroupFile02">
                <label style="margin-top: 0;" class="custom-file-label" for="inputGroupFile02">Выберите изображение</label>
            </div>

            <div class="input-group-append">
                <span class="input-group-text">Загрузить</span>
            </div>
        </div>
        <div class="img-wrap"></div>
        <div class="error" v-if="error.thumbnail">{{ error.thumbnail[0] }}</div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    data () {
      return {
          img: false
      }
    },
    methods: {
        processImg(event) {
            const imgEl = document.querySelector('.img-wrap');
            const targetFile = event.target.files[0];

            const img = document.createElement('img');
            img.classList.add(this.$style.imgUpload)
            img.src = URL.createObjectURL(targetFile);
            imgEl.append(img);
            img.onload = function () {
                console.log('ready');
            };

            this.$emit('process-img', targetFile);
            // console.log(event.target.files[0])
            // this.inputs.thumbnail = event.target.files[0]
        },
    }
}
</script>

<style scoped>
.custom-file-input:lang(en) ~ .custom-file-label::after {
    content: "Обзор";
}
/*.img-wrap img {*/
/*    max-width: 100%;*/
/*    margin: 0 auto;*/
/*}*/
</style>

<style module>
.imgUpload {
    max-width: 100%;
    margin: 0 auto;
    display: block;
}
</style>
