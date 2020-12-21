<template>
    <Card> 
        <router-link :to="`students/${student.id}`" class="title is-4 has-text-info"> {{ student.name }} </router-link>
        <div class="is-pulled-right mb-4">
            <Button 
                color="white" 
                :fullWidth="false" 
                :event="addMentor" 
                icon="chalkboard-teacher" 
                iconColor="grey-light"
            />
            <ButtonDelete :modal="getModalDeleteConfirm" />
        </div>
        <ModalConfirm 
            title="Attention!" 
            :content="modalConfirm.content" 
            :buttonConfirm="modalConfirm.buttonConfirm" 
            @close="close"
            v-if="showModalConfirm"
        />
    </Card>
</template>

<script>
import { Card, Button, ButtonDelete, ModalConfirm } from '../shared'

export default {
    name: 'CardStudent',

    components: {
        Card,
        Button,
        ButtonDelete,
        ModalConfirm,
    },

    props: {
        student: Object,
    },

    data() {
        return { 
            showModalConfirm: false,
        }
    },

    computed: {
        getModalDeleteConfirm() {
            return {
                title: 'Attention!',
                content: `Are you sure you want to remove <b>${this.student.name}</b> from the application?`,
                button: () => {}
            }
        },
    },

    methods: {
        addMentor() {
            this.showModalConfirm = true
            this.modalConfirm = {
                content: `Are you sure you want to <b>${this.student.name}</b> become a mentor?`,
                buttonConfirm: () => { }
            }
        }, 

        close() {
            this.showModalConfirm = false
        },
    }

}
</script>

<style>

</style>