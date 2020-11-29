<template>
    <Card> 
        <router-link :to="`students/${student.id}`" class="title is-4 has-text-info"> {{ student.name }} </router-link>
        <div class="is-pulled-right mb-4">
            <Button 
                color="white" 
                :fullWidth="false" 
                :event="addMentor" 
                icon="chalkboard-teacher" 
                iconColor="has-text-grey-light"
            />
            <Button 
                color="white" 
                :fullWidth="false" 
                :event="remove"  
                icon="trash" 
                iconColor="has-text-grey-light"
            />
        </div>
    </Card>
</template>

<script>
import { Card, Button } from '../shared'

export default {
    name: 'CardStudent',

    components: {
        Card,
        Button,
    },

    props: {
        student: Object,
    },

    methods: {
        remove() {
            this.$emit('remove', this.student)
        },

        addMentor() {
            this.$emit('addMentor', this.student)
        }
    }

}
</script>

<style>

</style>