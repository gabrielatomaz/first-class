<template>
    <div class="is-pulled-right">
        <Button 
            color="white" 
            :fullWidth="false" 
            :event="remove"  
            icon="trash" 
            iconColor="grey-light"
        />
        <ModalConfirm 
            :title="modal.title" 
            :content="modal.content" 
            :buttonConfirm="modal.button" 
            @close="close"
            v-if="showModalConfirm"
        />
    </div>
</template>

<script>
import { ModalConfirm } from './'
import Button from './Button'

export default {
    name: 'ButtonDelete',

    components: {
        Button, 
        ModalConfirm,
    },
    
    data() {
        return {
            showModalConfirm: false,
        }
    },

    props: {
        modal: {
            type: Object,
        }
    },

    methods: {
        remove() {
            this.showModalConfirm = true
        },

        close() {
            this.showModalConfirm = false
        },
    }
}
</script>

<style>

</style>