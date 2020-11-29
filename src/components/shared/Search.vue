<template>
    <div class="field">
        <p class="control has-icons-left">
            <input class="input is-info" type="text" :placeholder="placeholder" v-model="search" @change="find">
            <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
            </span>
        </p>
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

    mounted() {
        this.find()
    },

    data() {
        return { search: '' }
    },

    methods: {
        find() {
            const result = this.list.filter((item) => { 
                if (item.name) return item.name.toLowerCase().includes(this.search.toLowerCase()) 

                return item.title.toLowerCase().includes(this.search.toLowerCase()) 
            })

            this.$emit('result', result)
        }
    }
}
</script>

<style>

</style>