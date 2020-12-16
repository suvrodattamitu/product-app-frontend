<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">

            <div v-if="isAuthUser">
                <router-link class="navbar-brand" to="/">Home</router-link>
            </div>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav custom-right pull-right">
                    <li class="nav-item" v-if="!isAuthUser">
                        <router-link class="nav-link active" aria-current="page" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!isAuthUser">
                        <router-link class="nav-link" to="/signup">Signup</router-link>
                    </li>
                    <li class="nav-item" v-if="isAuthUser">
                        <a href="#" class="nav-link" @click.prevent="logoutUser">Logout</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>

<script>
export default {

    name: 'Navigation',

    data() {

        return {
            isAuthUser: window.localStorage.getItem('user'), 
        }

    },

    methods: {

        logoutUser() {
            localStorage.removeItem('user')
            this.isAuthUser = false
            this.$router.push("/login")
        }

    }

}
</script>