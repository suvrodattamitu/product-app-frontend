<template>
    <div class="content-body">
        <h4>Signup</h4>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="name" class="form-control" placeholder="Enter name">
            </div><br>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="Enter email">
            </div><br>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div><br>
            <button type="submit" class="btn btn-info" @click.prevent="signUpUser">Signup</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'Signup',

        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },

        methods: {

            signUpUser() {

                const url = "/register"

                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                const headers = {
                    "Content-Type": "application/json"
                }

                axios.post(url, data, headers)
                    .then(response => {

                        if(response.data.token !== null) {

                            //signup done
                            localStorage.setItem( "user", response.data.token )
                            this.$store.dispatch("authentication_action",true)
                            this.$router.push("/")

                        }else {
                            //error
                        }

                    })
                    .catch(error => {

                        //error
                        console.log(error)

                    })
                    .then(() => {
                        
                    })


            }

        },

        mounted() {
            
        }
    
    }

</script>