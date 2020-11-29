<template>
    <Card>
        <router-link class="title is-4 has-text-info" :to="path"> {{ title }} </router-link>
        <div class="is-pulled-right mb-4">
            <Button color="white" :fullWidth="false" :event="remove"  icon="trash" iconColor="grey-light"/>
        </div>
        <progress class="progress is-info mt-3" :value="progress" max="100" />
    </Card>
</template>

<script>
import { Card, Button } from '../../shared'

export default {
    name: 'CardProgress',

    components: { 
        Card,
        Button,
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
    },

    methods: {
        remove() {
            this.$emit('remove')
        }
    }
}
</script>

<style>

</style>