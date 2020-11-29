<template>
    <div>
        <div class="columns is-mobile mt-2">
            <div class="column is-4 is-offset-8">
                <Search placeholder="Search by mentor name..." :list="mentors" @result="search" />
            </div>
        </div>
        <div v-for="mentor in mentors" :key="mentor.id">
            <CardMentors :mentor="mentor" @remove="remove"/>
        </div>
        <ModalConfirm 
            title="Attention!"
            :content="modalConfirm.content" 
            :buttonConfirm="modalConfirm.buttonConfirm" 
            v-if="showModalConfirm"
            @close="close"
        />
    </div>
</template>

<script>
import { CardMentors } from '../../components/mentors'
import { ModalConfirm, Search } from '../../components/shared'

export default {
    name: 'Mentors',

    components: {
        CardMentors,
        ModalConfirm,
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
        }
    },

    methods: {
        remove(mentor) {
            this.showModalConfirm = true
            this.modalConfirm = { 
                content: `Are you sure you don't want to <b>${mentor.name}</b> as a mentor anymore?`,
                buttonConfirm: () => { }
            }
        },

        close() {
            this.showModalConfirm = false
        },

        search(result) {
            this.mentors = result
        }
    }
}
</script>