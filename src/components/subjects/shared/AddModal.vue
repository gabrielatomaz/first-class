<template>
    <Modal :close="close">
        <span class="title is-4 has-text-info">
            {{ title }}
        </span>
        <form class="mt-5"> 
            <div class="field has-addons">
                <div class="control is-expanded">
                    <Input
                        type="text"
                        :placeholder="title"
                        required
                    />
                </div>
                <div class="control">
                    <Button icon="plus" type="outlined" :fullWidth="false" :event="addInput" />
                </div>
            </div>
            <div v-if="hasInputs()">
                <div class="field has-addons" v-for="(input, counter) in inputs" :key="counter">
                    <div class="control is-expanded">
                        <Input
                            type="text"
                            :placeholder="title"
                            @model="input.value"
                            required
                        />
                    </div>
                    <div class="control">
                        <Button icon="plus" type="outlined" :fullWidth="false" :event="addInput" />
                    </div>
                    <div class="control">
                        <Button icon="times" type="outlined" :fullWidth="false" :event="() => { removeInput(counter) }" />
                    </div>
                </div>

            </div>
            <div class="is-flex is-justify-content-flex-end mt-5">
                <div>
                    <Button icon="check" type="outlined" :fullWidth="false" :event="sendValues"/>
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
        return { inputs: [] }
    },

    methods: {
        addInput(event) {
            event.preventDefault()
            this.inputs.push({ value: '' })
        },

        removeInput(counter) {
            event.preventDefault()
            this.inputs.splice(counter, 1)
        },

        hasInputs() {
            return this.inputs.length > 0
        },

        sendValues(event) {
            event.preventDefault()
            console.log(this.inputs)
        }
    }
}
</script>