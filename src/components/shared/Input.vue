<template>
<div class="field">
  <p :class="['control', hasIcon() ? 'has-icons-left' : '']">
    <input :class="['input', `is-${color}`]" :type="type" :placeholder="placeholder" v-model="model" />
    <span class="icon is-small is-left" v-if="hasIcon()" v-html="displayIcon()"></span>
  </p>
</div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    type: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: 'info',
    },

    icon: {
      type: String,
    }
  },

  data() {
    return { model: null }
  },

  methods: {
    displayIcon() {
      return this.hasIcon() ? `<i class="fas fa-${this.icon}"></i></span>` : ''
    },

    hasIcon() {
      return this.icon
    },

    emitValue() {
      this.$emit('modelInput', this.model)
    },

  },
}
</script>

<style>

</style>