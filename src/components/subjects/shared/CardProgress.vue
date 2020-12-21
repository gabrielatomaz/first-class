<template>
    <Card>
        <router-link class="title is-4 has-text-info" :to="path"> {{ title }} </router-link>
        <div class="is-pulled-right mb-4">
            <ButtonDelete 
                :modal="buttonDeleteModal"
            />
        </div>
        <progress class="progress is-info mt-3" :value="progress" max="100" />
    </Card>
</template>

<script>
import { Card, ButtonDelete } from '../../shared'

export default {
    name: 'CardProgress',

    components: { 
        Card,
        ButtonDelete,
    },

    props: {
        title: {
            type: String,
            required: true,
        },
        path: {
            type: String,
        },
        progress: {
            type: Number,
        },
        buttonDeleteModal: {
            type: Object,
        },
    },
}
</script>

<style>

</style>