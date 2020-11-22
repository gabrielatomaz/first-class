<template>
    <Card>
        <span class="title is-4 has-text-info"> {{ title }} </span>
        <div class="is-pulled-right">
            <Button color="white" :fullWidth="false"  icon="eye" :iconColor="iconColor()" :event="setWatched"/>
            <Button color="white" :fullWidth="false"  icon="question-circle" iconColor="has-text-grey-light"/>
        </div>
    </Card>
</template>

<script>
import { Card, Button } from '../../../shared'

export default {
    name: 'CardContent',

    components: { 
        Button,
        Card,
    },

    props: {
        title: {
            type: String,
            required: true,
        },
        watched: {
            type: Boolean,
        }
    },

    data() {
        return {
            watchedContent: this.watched
        }
    },

    methods: {
        iconColor() {
            return this.watchedContent ? 'has-text-info' : 'has-text-grey-light'
        },

        setWatched() {
            this.watchedContent = !this.watchedContent 
        },
    },
}
</script>

<style>

</style>