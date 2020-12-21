<template>
    <div>
        <div class="columns is-mobile mt-2">
            <div class="column is-4 is-offset-8">
                <Search placeholder="Search by student name..." :list="students" @result="search" />
            </div>
        </div>
        <div v-for="student in searchStudents" :key="student.id">
            <CardStudent :student="student" />
        </div>
    </div>
</template>

<script>
import { CardStudent } from '../../components/students'
import { Search } from '../../components/shared'

export default {
    name: 'Students',

    components: {
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
            searchStudents: [],
            modalConfirm: null,
            showModalConfirm: false,
        }
    },

    methods: {
        close() {
            this.showModalConfirm = false
        },

        search(result) {
            this.searchStudents = result
        }
    }

}
</script>