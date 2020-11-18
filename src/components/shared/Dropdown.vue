<template>
<div class="field">
  <div class="control is-expanded">
    <div :class="['select', 'is-fullwidth', `is-${color}`]">
      <select v-model="model">
        <option v-for="option in options" :key="option">
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
        model: {
            type: String,
        }
    },
}
</script>