<template>
    <div class="content-body">
        <h4>Edit Product</h4>

        <router-link class="btn btn-sm btn-primary redirect-button" to="/">All Products</router-link>

        <form enctype="multipart/form-data">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="title" class="form-control" placeholder="Enter title">
            </div><br>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" v-model="description" class="form-control" placeholder="Enter description">
            </div><br>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" v-model="price" class="form-control" placeholder="price">
            </div><br>

            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" class="form-control" id="file" @change="onInputChange($event)" />
            </div><br>

            <button type="submit" class="btn btn-info" @click.prevent="updateProduct">Update</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'Signup',

        data() {
            return {
                title: '',
                description: '',
                price: '',
                image_file: null,
                productId: this.$route.params.product_id
            }
        },

        methods: {

            getProduct() {

                let token = localStorage.getItem('user')
                let url = `http://127.0.0.1:8000/api/user/product/edit/${this.productId}/${token}`
                
                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }

                axios.get(url,{'headers':headers})
                    .then(response => {

                        if( response.data && response.data.product ) {
                            let product = response.data.product
                            this.title = product.title
                            this.description = product.description
                            this.price = product.price
                            //console.log(response.data)
                        }

                    })
                    .catch(error => {

                        //error
                        console.log(error)

                    })
                    .then(() => {
                        
                    });

            },

            updateProduct() {

                let token = localStorage.getItem('user')

                const form = new FormData();
                form.append('title', this.title)
                form.append('description', this.description)
                form.append('image', this.image_file)
                form.append('price', this.price)
                form.append('token', token)
                form.append("_method", "put")

                console.log(form);

                const url = `http://127.0.0.1:8000/api/user/product/update/${this.productId}`

                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token
                }

                let data = {
                    'title' : this.title,
                    'description' : this.description,
                    'price' : this.price,
                }

                //actually this is put request but form data creates issue when not set it to post to put
                axios.post(url, form, { 'headers' : headers } )
                    .then(response => {

                        this.$router.push("/");

                    })
                    .catch(error => {

                        //error
                        console.log(error)

                    })
                    .then(() => {
                        
                    })


            },

            //for image file
            onInputChange(event) {
                const file = event.target.files[0]
                this.image_file = file
                let that = this
                let reader = new FileReader()
                reader.onload = (event) => {
                    // The file's text will be printed here
                    that.changed_image = event.target.result
                }
                reader.readAsDataURL(file)
            },

        },

        mounted() {
            
            this.getProduct()

        }
    
    }

</script>