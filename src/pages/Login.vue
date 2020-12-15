<template>
    <div class="content-body">
        <h4>Login</h4>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="Enter email">
            </div><br>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div><br>
            <button type="submit" class="btn btn-info" @click.prevent="signInUser">Login</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'Login',

        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {

            signInUser() {
                console.log('hello login')
            }

        }
    
    }

</script>