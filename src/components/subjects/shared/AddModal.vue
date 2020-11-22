<template>
    <Modal :close="close">
        <span class="title is-4 has-text-info">
            {{ title }}
        </span>
        <form class="mt-5">
            <div v-if="hasInputs()">
                <div class="field has-addons" v-for="(input, counter) in inputs" :key="input.id">
                    <div class="control is-expanded">
                        <Input
                            type="text"
                            :placeholder="title"
                            @model="getInputValue(counter, ...arguments)"
                            required
                        />
                    </div>
                    <div class="control" v-if="counter === 0">
                        <Button icon="plus" :fullWidth="false" :event="addInput" />
                    </div>
                    <div class="control" v-if="counter !== 0">
                        <Button icon="times" type="outlined" :fullWidth="false" :event="() => { removeInput(counter) }" />
                    </div>
                </div>

            </div>
            <div class="is-flex is-justify-content-flex-end mt-5">
                <div>
                    <Button icon="check" :fullWidth="false" :event="sendValues"/>
                </div>
            </div>
        </form>
    </Modal>
</template>

<script>
import { Modal, Input, Button } from '../../shared'

export default {
    name: 'AddModal',
    
    components: {
        Modal,
        Input,
        Button,
    },

    props: {
        close: {
            Type: Function,
            required: true,
        },

        title: {
            Type: String,
            required: true,
        }
    },

    data() {
        return { inputs: [{ value: '', id: this.getId() }] }
    },

    methods: {
        addInput() {
            event.preventDefault()
            this.inputs.push({ value: '', id: this.getId() })
        },

        removeInput(counter) {
            event.preventDefault()
            this.inputs.splice(counter, 1)
        },

        hasInputs() {
            return this.inputs.length > 0
        },

        sendValues() {
            event.preventDefault()
        },

        getInputValue(counter, value) {
            const { id } = this.inputs[counter]
            this.inputs[counter] = { value, id }
        },

        getId() {
            return Math.floor(Math.random() * 100)
        }
    }
}
</script>