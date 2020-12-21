<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"> {{ title }} </p>
                <button class="delete" aria-label="close" @click="close"></button>
            </header>
            <section class="modal-card-body" v-html="content" />
            <footer class="modal-card-foot is-flex is-justify-content-flex-end">
                <p class="control">
                    <Button type="info" :event="buttonConfirm" @event="close" icon="check" />
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
import Button from './Button'

export default {
    name: 'ModalConfirm',

    components: {
        Button,
    },

    props: {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        buttonConfirm: {
            type: Function,
        },
    },

    methods: {
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style scoped>
@media screen and (min-width: 769px){
    .modal-card, .modal-content {
        width: 500px;
    }
}
</style>