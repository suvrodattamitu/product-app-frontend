<template>
    <div class="content-body">
       <h4>Products</h4>
       <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'Product',

        data() {
            return {
               products:[]
            }
        },

        methods: {

            getProducts() {
                console.log('hello products')
            }

        },

        mounted() {

            this.getProducts()

        }
    
    }

</script>