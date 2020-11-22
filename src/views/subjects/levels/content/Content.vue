<template>
    <div>
        <AddModal 
            title="Add a new content"
            :close="showAddModal" 
            @close="showAddModal"
            v-if="isAddModalActive" 
        />
        <div class="columns">
            <div class="column mt-5">
                <Button icon="plus" class="is-pulled-right" :fullWidth="false" type="outlined" :event="showAddModal" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div v-for="content in contents" :key="content.title">
                    <CardContent 
                        :title="content.title" 
                        :watched="content.watched" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CardContent } from '../../../../components/subjects/levels/content'
import { AddModal } from '../../../../components/subjects/shared'
import Button from '../../../../components/shared/Button'

export default {
    name: 'Content',

    components: { 
        Button,
        AddModal,
        CardContent,
    },

    data() {
        return {
            contents: [
                { title: 'O que é programação?', watched: true },
                { title: 'O que é ensinado?', watched: false },
                { title: 'Qual o mercado de trabalho?', watched: false },
                { title: 'O que e possível fazer?', watched: false },
            ],
            isAddModalActive: false,
        }
    },

    methods: {
        showAddModal() {
            this.isAddModalActive = !this.isAddModalActive
        }
    }
}
</script>

<style>

</style>