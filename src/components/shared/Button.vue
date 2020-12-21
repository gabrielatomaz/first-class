<template>
        <button 
            :class="['button', `is-${color}`, isFullWidth, isLoading, hasType, hasSize]"
            @click="onHandler(event)"
            v-html="text || hasIcon"
        />
</template>

<script>
export default {
    name: 'Button',
    
    props: {
        text: { 
            type: String,
        },
        event: {
            type: Function,
            required: true,
        },
        size: {
            type: String,
        },
        type: {
            type: String,
        },
        color: {
          type: String,
          default: 'info'
        },
        loading: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
        },
        iconColor: {
            type: String,
        },
        fullWidth: {
            type: Boolean,
            default: true,
        },
    },

    computed: {
        isLoading() {
            return this.loading ? 'is-loading' : ''
        },

        isFullWidth() {
            return this.fullWidth ? 'is-fullwidth' : ''
        },

        hasIcon() {
            return this.icon ? `<i class="fas fa-${this.icon} has-text-${this.iconColor}"></i>` : ''
        },
        
        hasType() {
            return this.type ? `is-${this.type}` : ''
        },

        hasSize() {
            return this.size ? `is-${this.size}` : ''
        },
    },

    methods: {
        onHandler(event) {
            event()
            this.$emit('event')
        },
    }
}
</script>

<style>

</style>