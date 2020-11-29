<template>
  <i :class="`fas fa-${badge} fa-${size}x has-text-${color}`"></i>
</template>

<script>
export default {
    name: 'Badge',

    props: {
        badge: {
            type: String,
            required: true,
        }, 
        color: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 5,
        }
    }

}
</script>