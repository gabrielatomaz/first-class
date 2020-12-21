<template>
    <div>
        <div class="columns is-mobile mt-2">
            <div class="column is-4 is-offset-8">
                <Search placeholder="Search by mentor name..." :list="mentors" @result="search" />
            </div>
        </div>
        <div v-for="mentor in mentorsSearch" :key="mentor.id">
            <CardMentors :mentor="mentor" :buttonDeleteModal="getModalConfirm(mentor.name)"/>
        </div>
    </div>
</template>

<script>
import { CardMentors } from '../../components/mentors'
import { Search } from '../../components/shared'

export default {
    name: 'Mentors',

    components: {
        CardMentors,
        Search,
    },

    data() {
        return {
            mentors: [
                { id: 1, name: 'Gabriela Ribeiro', phone: '51998211290', address: 'Rua Osasco, 393', country: 'Brasil' },
                { id: 2, name: 'Matheus Quadros',  phone: '51999999999', address: 'Rua do Limoeiro', country: 'Brasil' },
                { id: 3, name: 'Nicole Ribeiro', phone: '51999999999', address: 'Rua Osasco, 393', country: 'Brasil' },
                { id: 4, name: 'Jeser Becker', phone: '51999999999', address: 'Hornsby', country: 'Australia' },
                { id: 5, name: 'Daiane Rodrigues', phone: '51999999999', address: 'Hornsby', country: 'Australia' },
            ],
            modalConfirm:null,
            showModalConfirm: false,
            mentorsSearch: [],
        }
    },

    methods: {
        getModalConfirm(name){
            return {
                title: 'Attention!',
                content: `Are you sure you don't want to <b>${name}</b> as a mentor anymore?`,
                button: () => {
                },
            }
        },

        close() {
            this.showModalConfirm = false
        },

        search(result) {
            this.mentorsSearch = result
        }
    }
}
</script>