<template>
    <div class="columns is-vcentered">
        <div class="column" id="img">
            <img src="../../assets/background-register.svg" class="image is-fullwidth">
        </div>
        <div class="column is-three-fifths">
            <div class="columns is-centered">
                <div class="column is-three-quarters">
                    <Logo />
                    <div class="field">
                        <div class="field-body">
                            <Input
                                type="text"
                                placeholder="Full name"
                                icon="user"
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                icon="envelope"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="number"
                                placeholder="Team number"
                                icon="users"
                            />
                            <Input
                                type="phone"
                                placeholder="Phone"
                                icon="phone"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                icon="lock"
                            />
                            <Input
                                type="password"
                                placeholder="Confirm password"
                                icon="lock"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="text"
                                placeholder="Address"
                                icon="map-marker-alt"
                            />
                            <Input
                                type="text"
                                placeholder="Country"
                                icon="globe-americas"
                            />
                        </div>
                        <Button 
                            class="mt-2"
                            text="Register"
                            :event="register"
                        />
                    </div>
                    <div class="mt-2">
                        <label>Already have an account? <router-link to="/login" class="has-text-info">Log in</router-link>.</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Logo, Input, Button } from '../../components/shared'
export default {
    name: 'Register',

    components: {
        Logo,
        Input,
        Button,
    },

    methods: {
        register() {
            return
        }
    },
    
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