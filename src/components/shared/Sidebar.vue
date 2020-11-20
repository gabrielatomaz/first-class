<template>
  <div class="columns">
      <div class="column is-3" id="sidebar">
          <div class="ml-2">
            <Button 
                icon="chevron-left"
                type="outlined" 
                :fullWidth="false" 
                size="small"
            />
          </div>
        <div class="is-centered">
            <figure id="avatar" class="image is-128x128">
                <img class="is-rounded" src="../../assets/female-avatar.svg">
            </figure>
            <div class="has-text-centered mt-4">
                <router-link  class="has-text-info" to="/profile"> {{ user.name }} </router-link>
            </div>
            <div class="has-text-centered mt-4">
                <Button text="My badges" type="outlined" :fullWidth="false" />
            </div>
        </div>
        <img id="bottom-image" width="300" src="../../assets/sidebar.svg" />
      </div>
  </div>
</template>

<script>
import Button from './Button'

export default {
    name: 'Sidebar',

    components: { Button },

    data() {
        return {
            user: {
                name: 'Gabriela Tomaz do Amaral Ribeiro',
            },
        }
    }
}
</script>

<style lang="css" scoped>
#sidebar {
    height: 100vh;
    background-color: hsl(204, 86%, 53%, 0.25);
}

.columns {
    margin-top: 0 !important;
}

figure#avatar {
    margin-right: auto;
    margin-left: auto;
}
</style>