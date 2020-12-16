<template>
    <div class="content-body">
       <h4>Products</h4>

       <div v-if="products.length" class="products-table">

           <router-link class="btn btn-sm btn-primary redirect-button" to="/add-product">Add Product</router-link>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody v-for="(product,index) in products" :key="index">
                    <tr>
                        <th scope="row">{{ product.id }}</th>
                        <td>{{ product.title }}</td>
                        <td>{{ product.description }}</td>
                        <td>
                            <img v-if="product.image" height="80" width="80" :src="file_directory+'/'+product.image" />
                            <p v-else> No Image </p>
                        </td>
                        <td>{{ product.price }}</td>
                        <td class="custom-btn-group">
                            <button type="button" class="btn btn-sm btn-success" @click.prevent="redirectToEdit(product.id)">Edit</button>
                            <button type="button" class="btn btn-sm btn-danger" @click.prevent="deleteProduct(product.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else>
            <p>No products found!! Please add one</p>
            <router-link class="btn btn-sm btn-primary" to="/add-product">Add Product</router-link>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'Products',

        data() {
            return {
                file_directory: '',
                products:[]
            }
        },

        methods: {

            getProducts() {

                let token = localStorage.getItem('user')
                let url = 'http://127.0.0.1:8000/api/user/products/'+ token
                
                axios.get(url)
                    .then(response => {

                        if( response.data.products ) {
                            this.products = response.data.products
                            this.file_directory = response.data.file_directory
                        }

                        console.log(response.data)

                    })
                    .catch(error => {

                        //error
                        console.log(error)

                    })
                    .then(() => {
                        
                    });

            },

            deleteProduct( productId ) {

                let token = localStorage.getItem('user')

                const url = "http://127.0.0.1:8000/api/user/product/delete/"+productId

                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token
                }

                axios.delete(url, {'headers':headers})
                    .then(response => {

                        this.getProducts()

                    })
                    .catch(error => {

                        //error
                        console.log(error)

                    })
                    .then(() => {
                        
                    });

            },

            redirectToEdit( productId ) {
                this.$router.push(`/edit-product/${productId}`);
            }

        },

        mounted() {

            this.getProducts()

        }
    
    }

</script>