<template>
    <div class="columns is-vcentered">
        <div class="column is-hidden-touch" id="img">
            <img src="../../assets/background-register.svg" class="image is-fullwidth">
        </div>
        <div class="column is-7-desktop is-12-mobile">
            <div class="columns is-centered is-mobile">
                <div class="column is-10-desktop is-8-tablet is-8-mobile">
                    <Logo />
                    <ErrorMessage 
                        message="Please, fill the highlighted field(s)."
                        @close="closeErrorMessage"
                        v-if="showErrorMessage"
                    />
                    <div class="field">
                        <div class="field-body">
                            <Input
                                type="text"
                                placeholder="Full name"
                                icon="user"
                                v-model="name.value"
                                :color="name.errorClass"
                                @change="hasChange(name)"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                icon="envelope"
                                v-model="email.value"
                                :color="email.errorClass"
                                @change="hasChange(email)"
                            />
                            <Input
                                type="email"
                                placeholder="Confirm email"
                                icon="envelope"
                                v-model="confirmEmail.value"
                                :color="confirmEmail.errorClass"
                                @change="hasChange(confirmEmail)"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="number"
                                placeholder="Team number"
                                icon="users"
                                v-model="teamNumber.value"
                                :color="teamNumber.errorClass"
                                @change="hasChange(teamNumber)"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="phone"
                                placeholder="Phone"
                                icon="phone"
                                v-model="phone.value"
                                :color="phone.errorClass"
                                @change="hasChange(phone)"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                icon="lock"
                                v-model="password.value"
                                :color="password.errorClass"
                                @change="hasChange(password)"
                            />
                            <Input
                                type="password"
                                placeholder="Confirm password"
                                icon="lock"
                                v-model="confirmPassword.value"
                                :color="confirmPassword.errorClass"
                                @change="hasChange(confirmPassword)"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="text"
                                placeholder="Address"
                                icon="map-marker-alt"
                                v-model="address.value"
                                :color="address.errorClass"
                                @change="hasChange(address)"
                            />
                            <Input
                                type="text"
                                placeholder="Country"
                                icon="globe-americas"
                                v-model="country.value"
                                :color="country.errorClass"
                                @change="hasChange(country)"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Dropdown 
                                :options="dropdownOptions" 
                                placeholder="Select gender"
                                v-model="gender.value"
                                :color="gender.errorClass" 
                                @change="hasChange(gender)"
                            />
                        </div>
                        <Button 
                            class="mt-2"
                            text="Register"
                            :event="() => { register() }"
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
import { Logo, Input, Button, Dropdown, ErrorMessage } from '../../components/shared'
export default {
    name: 'Register',

    components: {
        Logo,
        Input,
        Button,
        Dropdown,
        ErrorMessage,
    },

    data() {
        return {
            showErrorMessage: false,
            name: { value: '', errorClass: '' },
            email: { value: '', errorClass: '' },
            confirmEmail: { value: '', errorClass: '' },
            teamNumber: { value: '', errorClass: '' },
            phone: { value: '', errorClass: '' },
            password: { value: '', errorClass: '' },
            confirmPassword: { value: '', errorClass: '' },
            address: { value: '', errorClass: '' },
            country: { value: '', errorClass: '' },
            gender: { value: '', errorClass: '' },
            dropdownOptions: [
                { text: 'Female' }, 
                { text: 'Male'},
                { text: 'Non-binary' },
                { text: 'Other' },
            ],
        }
    },

    methods: {
        register() {
            if (this.isFieldsValid()) this.$router.push('/subjects')
        },

        closeErrorMessage() {
            this.showErrorMessage = false
        },

        hasChange(prop) {
            prop.errorClass = ''
        },

        isFieldsValid() {
            const inputs =  [this.name, this.email, this.confirmEmail, this.teamNumber, this.phone,
                this.password, this.confirmPassword, this.address, this.country, this.gender]
            
            inputs.map(prop => { 
                if (!prop.value) { 
                    prop.errorClass = 'danger' 
                    
                    this.showErrorMessage = true
                }
            })

            const allFieldsAreFilled = inputs.every((prop) => prop.value)

            this.showErrorMessage = !allFieldsAreFilled

            return allFieldsAreFilled
        },
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

@media screen and (max-width: 1023px){
    .column.is-12-mobile {
        margin-top: calc(100vh / 16);
    }
}
</style>