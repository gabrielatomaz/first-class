<template>
    <div>
        <ModalAdd 
            title="Add a new content"
            :close="showModalAdd" 
            @close="showModalAdd"
            v-if="isModalAddActive" 
        />
        <div class="columns is-mobile mt-3">
            <div class="column is-offset-5">
                <Button icon="plus" class="is-pulled-right" :fullWidth="false" type="outlined" :event="showModalAdd" />
            </div>
            <div class="column is-4">
                <Search placeholder="Search by content title..." :list="contents" @result="search" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div v-for="content in searchContents" :key="content.title">
                    <CardContent 
                        :title="content.title" 
                        :watched="content.watched" 
                        :buttonDeleteModal="getModalConfirm(content.title)" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CardContent } from '../../../../components/subjects/levels/contents'
import { ModalAdd } from '../../../../components/subjects/shared'
import { Button, Search } from '../../../../components/shared'

export default {
    name: 'Contents',

    components: { 
        Button,
        Search,
        ModalAdd,
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
            isModalAddActive: false,
            showModalConfirm: false,
            modalConfirm: null,
            searchContents: [],
        }
    },

    methods: {
        showModalAdd() {
            this.isModalAddActive = !this.isModalAddActive
        },
        
        getModalConfirm(title){
            return {
                title: 'Attention!',
                content: `Are you sure you want to delete the <b>"${title}"</b> content?`,
                button: () => {
                }
            }
        },

        close() {
            this.showModalConfirm = false
        },

        search(result) {
            this.searchContents = result
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