<template>
    <div class="columns is-vcentered">
        <div class="column is-two-fifths">
            <div class="columns is-centered">
                <div class="column is-two-thirds">
                    <Logo />
                    <Input
                        type="text"
                        placeholder="Email"
                        icon="envelope"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        icon="lock"
                    />
                    <Button 
                        class="mt-2"
                        text="Login"
                        :event="login"
                    />
                    <div class="mt-2">
                        <label>New to FIRST Class?  <router-link to="/register" class="has-text-info">Create an account</router-link>.</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="column" id="img">
            <img src="../../assets/background-login.svg" class="image is-fullwidth">
        </div>
    </div>
</template>

<script>
import { Logo, Input, Button } from '../../components/shared'

export default {
    name: 'Login',

    components: {
        Logo,
        Input,
        Button,
    },

    methods: {
        login() {
            return
        },
    }
}
</script>

<style lang="css" scoped>
#img {
    background-color: hsl(204, 86%, 53%, 0.25);
    padding-bottom: 0 !important;
}

.image {
    height: 100vh;
}
</style>