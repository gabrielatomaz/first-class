<template>
    <Button 
        color="white" 
        :fullWidth="false" 
        :icon="icon().icon" 
        :iconColor="icon().color"
        :event="toggleBadge"
        size="large"
    />
</template>

<script>
import { Button } from '../shared'

export default {
    name: 'ButtonBadge',

    components: {
        Button,
    },

    props: {
        type: {
            type: String,
            required: true,
        }, 
        color: {
            type: String,
            required: true,
        },
        badge: {
            type: Boolean,
            required: true,
        },
    },

    data() {
        return {
            hasBadge: this.badge
        }
    },

    methods: {
        icon() {
            return this.hasBadge 
                ? { icon: this.type, color: this.color }
                : { icon: 'hand-holding-medical', color: 'grey-light' }
        },

        toggleBadge() {
            this.hasBadge = !this.hasBadge 
        }
    },
}
</script>

<style>

</style>