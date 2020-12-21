<template>
    <div>
        <ModalAdd 
            title="Add a new subject"
            :close="showModalAdd"
            @close="showModalAdd" 
            v-if="isModalAddActive" 
        />
        <div class="columns is-mobile mt-3">
            <div class="column is-offset-5">
                <Button icon="plus" class="is-pulled-right" :fullWidth="false" type="outlined" :event="showModalAdd" />
            </div>
            <div class="column is-4">
                <Search placeholder="Search by subject title..." :list="subjects" @result="search" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div v-for="subject in searchSubjects" :key="subject.title">
                    <CardProgress 
                        :title="subject.title" 
                        :progress="subject.progress" 
                        :path="`subjects/${subject.path}`"
                        :buttonDeleteModal="getModalConfirm(subject.title)" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ModalAdd, CardProgress } from '../../components/subjects/shared'
import { Button, Search } from '../../components/shared'

export default {
    name: 'Subjects',

    components: {
        Button,
        Search,
        ModalAdd,
        CardProgress,
    },

    data() {
        return {
            subjects: [    
                { title: 'Awards', path: 'awards', progress: 35 },
                { title: 'CAD', path: 'cad', progress: 50 },
                { title: 'Drive Team', path: 'drive-team', progress: 40 },
                { title: 'Electrical', path: 'electrical', progress: 100 },
                { title: 'Mechanics', path: 'mechanics', progress: 0 },
                { title: 'Pneumatics', path: 'pneumatics', progress: 0 },
                { title: 'Programming', path: 'programming', progress: 10 },
                { title: 'Strategy', path: 'strategy', progress: 0 },
            ],
            isModalAddActive: false,
            showModalConfirm: false,
            modalConfirm: null,
            searchSubjects: [],
        }
    },

    methods: {
        showModalAdd() {
            this.isModalAddActive = !this.isModalAddActive
        },

        getModalConfirm(title){
            return {
                title: 'Attention!',
                content: `Are you sure you want to delete the <b>"${title}"</b> subject?`,
                button: () => {
                }
            }
        },

        close() {
            this.showModalConfirm = false
        },
        
        search(result) {
            this.searchSubjects = result
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