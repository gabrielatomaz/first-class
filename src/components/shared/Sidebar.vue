<template>
    <div class="columns">
        <div class="column is-3">
            <div class="ml-2">
                <Button 
                    icon="chevron-left"
                    type="outlined" 
                    :fullWidth="false" 
                    size="small"
                    class="mt-2"
                    :event="goBack"
                />
            </div>
            <figure id="avatar" class="image is-128x128">
                <img class="is-rounded" src="../../assets/female-avatar.svg">
            </figure>
            <div class="mt-4 has-text-centered">
                <router-link  class="has-text-info" to="/profile"> {{ user.name }} </router-link>
            </div>
            <div  class="mt-4 has-text-centered ml-2">
                <Button text="Subjects" type="outlined" :event="() => { goTo('/subjects') }" />
            </div>
            <div  class="mt-4 has-text-centered ml-2">
                <Button text="Badges" type="outlined" :event="() => { goTo('/badges') }" />
            </div>
            <div class="mt-4 has-text-centered ml-2" v-if="user.mentor">
                <Button text="Students" type="outlined" :event="() => goTo('/students')" />
            </div>
            <div class="mt-4 has-text-centered ml-2" v-if="user.mentor">
                <Button text="Mentors" type="outlined" :event="() => goTo('/mentors')" />
            </div>
            <div class="mt-4 has-text-centered ml-2" v-if="user.mentor">
                <Button icon="sign-out-alt" type="outlined" :event="() => { goTo('/logout') }" />
            </div>
        </div>
        <div class="column is-8 mt-2 mr-0 mb-2 ml-5">
            <router-view :key="$route.path" />
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
                mentor: true,
            },
        }
    },
    
    methods: {
        goTo(route) {
            if (this.$route.path === route) return
            else this.$router.push(route)
        },
        
        goBack() {
            this.$router.go(-1)
        },
    },
}
</script>

<style lang="css" scoped>
.column.is-3 {
    background-color: hsl(204, 86%, 53%, 0.25);
    min-height: 100vh;
}

figure#avatar {
    margin-right: auto;
    margin-left: auto;
}

</style>