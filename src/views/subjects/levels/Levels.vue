<template>
    <div>
        <AddModal 
            title="Add a new level"
            :close="showAddModal" 
            v-if="isAddModalActive" 
        />
        <div class="columns">
            <div class="column mt-5">
                <Button icon="plus" class="is-pulled-right" :fullWidth="false" type="outlined" :event="showAddModal" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div v-for="level in levels" :key="level.title">
                    <Card :title="level.title" :progress="level.progress" :path="`${subject}/${level.path}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Card } from '../../../components/subjects'
import { AddModal } from '../../../components/subjects/shared'
import Button from '../../../components/shared/Button'

export default {
    name: 'Levels',

    components: { 
        Card,
        Button,
        AddModal,
    },

    data() {
        return { 
            levels: [
                { title: 'Training', progress: 100, path: 'training' },
                { title: 'Level I', progress: 100, path: 'level-i' },
                { title: 'Level II', progress: 10, path: 'level-ii' },
                { title: 'Level III', progress: 0, path: 'level-iii' },
                { title: 'Jedi', progress: 0, path: 'jedi' },
            ],
            subject: this.$route.params.subject,
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