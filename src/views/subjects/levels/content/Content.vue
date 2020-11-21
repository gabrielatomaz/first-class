<template>
    <div>
        <div class="columns">
            <div class="column mt-5">
                <Button icon="plus" class="is-pulled-right" :fullWidth="false" type="outlined" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div v-for="content in contents" :key="content.title">
                    <Card :title="content.title" :watched="content.watched" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Card } from '../../../../components/subjects'
import Button from '../../../../components/shared/Button'

export default {
    name: 'Content',

    components: { 
        Card,
        Button,
    },

    data() {
        return {
            contents: [
                { title: 'O que é programação?', watched: true },
                { title: 'O que é ensinado?', watched: false },
                { title: 'Qual o mercado de trabalho?', watched: false },
                { title: 'O que e possível fazer?', watched: false },
            ]
        }
    }
}
</script>

<style>

</style>