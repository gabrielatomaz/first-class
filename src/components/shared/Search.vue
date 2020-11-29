<template>
    <div class="field has-addons">
        <div class="control">
            <input class="input is-info" type="text" :placeholder="placeholder" v-model="search">
        </div>
        <div class="control">
            <a class="button is-info is-outlined" @click="find">
                <i class="fas fa-search"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search',

    props: {
        placeholder: {
            type: String,
        },

        list: {
            type: Array,
        }
    },

    data() {
        return { search: '' }
    },

    methods: {
        find() {
            const result = this.list.filter(({ name }) => name.includes(this.search))

            this.$emit('result', result)
        }
    }
}
</script>

<style>

</style>