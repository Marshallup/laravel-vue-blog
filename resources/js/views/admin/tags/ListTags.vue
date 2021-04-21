<template>
    <h2 v-if="!tags">Нет категорий!</h2>
    <div v-else class="mdl-grid ui-tables">
        <div class="mdl-cell mdl-cell--5-col-desktop mdl-cell--5-col-tablet mdl-cell--3-col-phone">
            <div class="mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h1 class="mdl-card__title-text">Теги</h1>
                </div>
                <div class="mdl-card__supporting-text no-padding">
                    <table class="mdl-data-table mdl-js-data-table" data-upgraded=",MaterialDataTable">
                        <thead>
                        <tr>
                            <th class="mdl-data-table__cell--non-numeric">#</th>
                            <th class="mdl-data-table__cell--non-numeric">Название категории</th>
                            <th class="mdl-data-table__cell--non-numeric">Ярлык</th>
                            <th class="mdl-data-table__cell--non-numeric">Дата создания</th>
                            <th class="mdl-data-table__cell--non-numeric">Дата обновления</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(tag, idx) in tags"
                            :key="tag.id"
                        >
                            <td class="mdl-data-table__cell--non-numeric">{{ idx + 1 }}</td>
                            <td class="mdl-data-table__cell--non-numeric">{{ tag.title }}</td>
                            <td class="mdl-data-table__cell--non-numeric">{{ tag.slug }}</td>
                            <td class="mdl-data-table__cell--non-numeric">{{ tag.created_at | dateFormat_MM/DD/YYYY_hh:mm }}</td>
                            <td class="mdl-data-table__cell--non-numeric">{{ tag.updated_at | dateFormat_MM/DD/YYYY_hh:mm }}</td>
                            <td class="mdl-data-table__cell--non-numeric">
                            <span
                                @click="deleteTag($event, idx)"
                                :data-id="tag.id"
                                class="label label--mini background-color--secondary"
                            >
                                Удалить
                            </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        tags () {
            return this.$store.getters['admin/getTags'];
        }
    },
    methods: {
        deleteTag (event, idx) {
            this.$store.dispatch('admin/deleteEl', {path: 'tags', idx, event: event, arr: this.tags})
        }
    },
    mounted() {
        this.$store.dispatch('admin/loadData', 'tags');
    },
}
</script>

<style scoped>

</style>
