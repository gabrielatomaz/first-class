<template>
  <Card>
    <span class="title is-4 has-text-info"> {{ mentor.name }} </span>
    <div class="is-pulled-right">
        <Button 
            color="white" 
            :fullWidth="false" 
            :event="remove"  
            icon="trash" 
            iconColor="has-text-grey-light"
        />
    </div>
    <div class="has-text-grey ml-1">
        <p class="is-3"> <i class="fas fa-map-marker-alt"></i> {{ mentor.address }} - {{ mentor.country }} </p>
        <p class="is-3"> <i class="fas fa-phone"></i> {{ mentor.phone }} </p>
    </div>
  </Card>
</template>

<script>
import { Card, Button } from '../shared' 

export default {
    name: 'CardMentors',

    components: {
        Card,
        Button,
    },

    props: {
        mentor: {
            type: Object,
        }
    },

    methods: {
        remove() {
            this.$emit('remove', this.mentor)
        }
    }

}
</script>

<style>

</style>