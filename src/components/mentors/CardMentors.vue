<template>
  <Card>
    <span class="title is-4 has-text-info"> {{ mentor.name }} </span>
    <div class="is-pulled-right">
        <ButtonDelete 
            :modal="buttonDeleteModal"
        />
    </div>
    <div class="has-text-grey ml-1">
        <p class="is-3"> <i class="fas fa-map-marker-alt"></i> {{ mentor.address }} - {{ mentor.country }} </p>
        <p class="is-3"> <i class="fas fa-phone"></i> {{ mentor.phone }} </p>
    </div>
  </Card>
</template>

<script>
import { Card, ButtonDelete } from '../shared' 

export default {
    name: 'CardMentors',

    components: {
        Card,
        ButtonDelete,
    },

    props: {
        mentor: {
            type: Object,
        },

        buttonDeleteModal: {
            type: Object,
        },
    },
}
</script>

<style>

</style>