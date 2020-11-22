<template>
    <Card>
        <router-link class="title is-4 has-text-info" :to="path"> {{ title }} </router-link>
        <progress class="progress is-info mt-3" :value="progress" max="100" />
    </Card>
</template>

<script>
import { Card } from '../../shared'

export default {
    name: 'CardProgress',

    components: { Card },

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
    },

}
</script>

<style>

</style>