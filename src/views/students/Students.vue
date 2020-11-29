<template>
    <div>
        <div class="columns is-mobile mt-2">
            <div class="column is-4 is-offset-8">
                <Search placeholder="Search by student name..." :list="students" @result="search" />
            </div>
        </div>
        <div v-for="student in students" :key="student.id">
            <CardStudent :student="student" @remove="remove" @addMentor="addMentor" />
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
import { CardStudent } from '../../components/students'
import { Search, ModalConfirm } from '../../components/shared'

export default {
    name: 'Students',

    components: {
        ModalConfirm,
        CardStudent,
        Search,
    },

    data() {
        return {
            students: [
                { id: 1, name: 'Bianca' },
                { id: 2, name: 'Luvielmo' },
                { id: 3, name: 'Pedro' },
                { id: 4, name: 'Luan' },
                { id: 5, name: 'John' },
            ],
            modalConfirm: null,
            showModalConfirm: false,
        }
    },

    methods: {
        remove(student) {
            this.showModalConfirm = true
            this.modalConfirm = { 
                content: `Are you sure you want to remove <b>${student.name}</b> from the application?`,
                buttonConfirm: () => { }
            }
        },

        addMentor(student) {
            this.showModalConfirm = true
            this.modalConfirm = {
                content: `Are you sure you want to <b>${student.name}</b> become a mentor?`,
                buttonConfirm: () => { }
            }
        }, 

        close() {
            this.showModalConfirm = false
        },

        search(result) {
            this.students = result
        }
    }

}
</script>