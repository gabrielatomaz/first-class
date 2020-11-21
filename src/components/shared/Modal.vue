<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot />
            </div>
        </div>
        <button class="modal-close is-large" @click="close"></button>
    </div>
</template>

<script>
export default {
    name: 'Modal',

    props: {
        close: {
            Type: Function,
            required: true,
        }
    },
}
</script>