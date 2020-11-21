<template>
    <div class="columns is-mobile is-vcentered">
        <div class="column is-5-desktop is-12-mobile">
            <div class="columns is-centered is-mobile">
                <div class="column is-10-desktop is-8-tablet is-8-mobile">
                    <Logo />
                    <form id="login">
                        <Input
                            type="text"
                            placeholder="Email"
                            icon="envelope"
                            required
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
                    </form>
                    <div class="mt-2">
                        <label>New to FIRST Class?  <router-link to="/register" class="has-text-info">Create an account</router-link>.</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-hidden-touch" id="img">
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
        login(event) {
            this.$router.push('/class')
            event.preventDefault();
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

@media screen and (max-width: 1023px){
    .column.is-12-mobile {
        margin-top: calc(100vh / 4);
    }
}
</style>