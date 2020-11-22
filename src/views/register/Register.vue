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
                        message="Please, fill the highlighted field."
                        @close="closeErrorMessage"
                        v-if="showErrorMessage"
                    />
                    <div class="field">
                        <div class="field-body">
                            <Input
                                type="text"
                                placeholder="Full name"
                                icon="user"
                                @model="setName"
                                :color="name.errorClass"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                icon="envelope"
                                @model="setEmail"
                                :color="email.errorClass"
                            />
                            <Input
                                type="email"
                                placeholder="Confirm email"
                                icon="envelope"
                                @model="setConfirmEmail"
                                :color="confirmEmail.errorClass"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="number"
                                placeholder="Team number"
                                icon="users"
                                @model="setTeamNumber"
                                :color="teamNumber.errorClass"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="phone"
                                placeholder="Phone"
                                icon="phone"
                                @model="setPhone"
                                :color="phone.errorClass"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                icon="lock"
                                @model="setPassword"
                                :color="password.errorClass"
                            />
                            <Input
                                type="password"
                                placeholder="Confirm password"
                                icon="lock"
                                @model="setConfirmPassword"
                                :color="confirmPassword.errorClass"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Input
                                type="text"
                                placeholder="Address"
                                icon="map-marker-alt"
                                @model="setAddress"
                                :color="address.errorClass"
                            />
                            <Input
                                type="text"
                                placeholder="Country"
                                icon="globe-americas"
                                @model="setCountry"
                                :color="country.errorClass"
                            />
                        </div>
                        <div class="field-body mt-2">
                            <Dropdown 
                                :options="dropdownOptions" 
                                placeholder="Select gender"
                                @model="setGender"
                                :color="gender.errorClass" 
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
                { text: 'Male'}, { text: 'Female' }, { text: 'Non-binary' }, { text: 'Other' }
            ],
        }
    },

    methods: {
        register() {
            if (this.isFieldsValid()) this.$router.push('/subjects')

            return
        },

        closeErrorMessage() {
            this.showErrorMessage = false
        },

        setName(name) {
            this.name.value = name
            this.name.errorClass = ''
        },

        setEmail(email) {
            this.email.value = email
            this.email.errorClass = ''
        },

        setConfirmEmail(email) {
            this.confirmEmail.value = email
            this.confirmEmail.errorClass = ''
        },

        setTeamNumber(number) {
            this.teamNumber.value = number
            this.teamNumber.errorClass = ''
        },

        setPhone(phone) {
            this.phone.value = phone
            this.phone.errorClass = ''
        },

        setPassword(password) {
            this.password.value = password
            this.password.errorClass = ''
        },

        setConfirmPassword(password) {
            this.confirmPassword.value = password
            this.confirmPassword.errorClass = ''
        },

        setAddress(address) {
            this.address.value = address
            this.address.errorClass = ''
        },

        setCountry(country) {
            this.country.value = country
            this.country.errorClass = ''
        },

        setGender(gender) {
            this.gender.value = gender
            this.gender.errorClass = ''
        },

        isFieldsValid() {
            if (!this.name.value) this.name.errorClass = 'danger'
            if (!this.email.value) this.email.errorClass = 'danger'
            if (!this.confirmEmail.value) this.confirmEmail.errorClass = 'danger'
            if (!this.teamNumber.value) this.teamNumber.errorClass = 'danger'
            if (!this.phone.value) this.phone.errorClass = 'danger'
            if (!this.password.value) this.password.errorClass = 'danger'
            if (!this.confirmPassword.value) this.confirmPassword.errorClass = 'danger'
            if (!this.address.value) this.address.errorClass = 'danger'
            if (!this.country.value) this.country.errorClass = 'danger'
            if (!this.gender.value) this.gender.errorClass = 'danger'

            if (!this.name.value ||
                !this.email.value ||
                !this.confirmEmail.value ||
                !this.teamNumber.value ||
                !this.phone.value ||
                !this.password.value ||
                !this.confirmPassword.value ||
                !this.address.value ||
                !this.country.value ||
                !this.gender.value ) { 
                    this.showErrorMessage = true

                    return false
                }
            
            return true
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

@media screen and (max-width: 1023px){
    .column.is-12-mobile {
        margin-top: calc(100vh / 16);
    }
}
</style>