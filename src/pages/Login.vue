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
                
                const url = "http://127.0.0.1:8000/api/user/login"

                const data = {
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
                            localStorage.setItem( "user", "Bearer "+response.data.token )
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
                        
                    });

            }

        }
    
    }

</script>