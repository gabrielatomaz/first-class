<template>
<div class="field">
  <div class="control is-expanded">
    <div :class="['select', 'is-fullwidth', `is-${color ? color : 'info'}`]">
      <select v-model="model" @change="emitValue" :value="value" @input="$emit('input', $event.target.value)" >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.text">
            {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Dropdown',

    props: {
        options: {
            type: Array,
            required: true,
        },
        color: {
            type: String,
            default: 'info',
        },
        placeholder: {
            type: String,
        },

        value: {
            type: String,
        },
    },

    data() {
        return { model: null }
    },

    methods: {
        emitValue() {
            this.$emit('change', this.value)
        },
    },
}
</script>