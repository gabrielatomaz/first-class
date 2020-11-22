<template>
  <i :class="`fas fa-${badge} fa-5x has-text-${color}`"></i>
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
        }
    }

}
</script>