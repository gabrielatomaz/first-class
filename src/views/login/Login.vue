<template>
    <div class="columns is-vcentered">
        <div class="column is-two-fifths">
            <div class="columns is-centered">
                <div class="column is-two-thirds">
                    <nav class="level is-mobile">
                        <div class="level-item has-text-centered has-text-info">
                            <div>
                            <i class="fas fa-book-open fa-3x"></i>
                            <h1>FIRST Class</h1>
                            </div>
                        </div>
                    </nav>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input is-info" type="email" placeholder="Email">
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input is-info" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <button class="button is-info is-fullwidth mt-2">Login</button>
                    <div class="mt-2">
                        <label>New to FIRSTClass?  <a href="#" class="has-text-info">Create an account</a>.</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <img src="../../assets/background-login.jpg" class="image is-fullwidth">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style lang="css" scoped>
.image {
    height: 100vh;
}
</style>