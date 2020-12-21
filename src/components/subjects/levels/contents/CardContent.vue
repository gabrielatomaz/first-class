<template>
    <Card>
        <span class="title is-4 has-text-info"> {{ title }} </span>
        <div class="is-pulled-right">
            <Button 
                color="white" 
                :fullWidth="false"  
                icon="eye" 
                :iconColor="iconColor()" 
                :event="setWatched"
            />
            <Button 
                color="white" 
                :fullWidth="false"  
                icon="question-circle" 
                iconColor="grey-light"
                :event="askForHelp"
            />
            <ButtonDelete :modal="buttonDeleteModal" />
        </div>
    </Card>
</template>

<script>
import { Card, Button, ButtonDelete } from '../../../shared'

export default {
    name: 'CardContent',

    components: { 
        ButtonDelete,
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
        },
        buttonDeleteModal: {
            type: Object,
        },
    },

    data() {
        return {
            watchedContent: this.watched
        }
    },

    methods: {
        iconColor() {
            return this.watchedContent ? 'info' : 'grey-light'
        },

        setWatched() {
            this.watchedContent = !this.watchedContent 
        },

        askForHelp() {
            this.$emit('help')
        },

        remove() {
            this.$emit('remove')
        }
    },
}
</script>

<style>

</style>