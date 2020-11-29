<template>
    <div>
        <ModalAdd 
            title="Add a new level"
            :close="showModalAdd" 
            @close="showModalAdd"
            v-if="isModalAddActive" 
        />
        <div class="columns is-mobile mt-3">
            <div class="column is-offset-5">
                <Button icon="plus" class="is-pulled-right" :fullWidth="false" type="outlined" :event="showModalAdd" />
            </div>
            <div class="column is-4">
                <Search placeholder="Search by content title..." :list="levels" @result="search" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div v-for="level in searchLevels" :key="level.title">
                    <CardProgress 
                        :title="level.title" 
                        :progress="level.progress" 
                        :path="`${subject}/${level.path}`" 
                        @remove="remove(level)" 
                    />
                </div>
            </div>
        </div>
         <ModalConfirm 
            title="Attention!" 
            :content="modalConfirm.content" 
            :buttonConfirm="modalConfirm.buttonConfirm" 
            @close="close" 
            v-if="showModalConfirm"
        />
    </div>
</template>

<script>
import { ModalAdd, CardProgress } from '../../../components/subjects/shared'
import { Button, ModalConfirm, Search } from '../../../components/shared'

export default {
    name: 'Levels',

    components: { 
        Button,
        Search,
        ModalAdd,
        CardProgress,
        ModalConfirm,
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
            isModalAddActive: false,
            showModalConfirm: false,
            modalConfirm: null,
            searchLevels: [],
        }
    },

    methods: {
        showModalAdd() {
            this.isModalAddActive = !this.isModalAddActive
        },

        remove(level){
            this.showModalConfirm = true

            this.modalConfirm = {
                content: `Are you sure you want to delete the <b>"${level.title}"</b> level?`,
                buttonConfirm: () => {}
            }
        },

        close() {
            this.showModalConfirm = false
        },

        search(result) {
            this.searchLevels = result
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 1023px){
    .column.mt-5 {
        margin-bottom: 10% !important;
    }
}
</style>