<template>
    <div class="content-body">
       <h4>Products</h4>

       <div v-if="products.length">
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
                        <td>@mdo</td>
                        <td>{{ product.price }}</td>
                        <td class="custom-btn-group">
                            <button type="button" class="btn btn-sm btn-success">Edit</button>
                            <button type="button" class="btn btn-sm btn-danger" @click.prevent="deleteProduct(product.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else>
            <p>No products found!! Please add one</p>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'Products',

        data() {
            return {
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

            }

        },

        mounted() {

            this.getProducts()

        }
    
    }

</script>