<template>
    <div class="content-body">
        <h4>Add Product</h4>
        <form enctype="multipart/form-data">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="title" class="form-control" placeholder="Enter title">
                <p v-if="errors.title" style="color:red">{{ errors.title[0] }}</p>
            </div><br>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" v-model="description" class="form-control" placeholder="Enter description">
                <p v-if="errors.description" style="color:red">{{ errors.description[0] }}</p>
            </div><br>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" v-model="price" class="form-control" placeholder="price">
                <p v-if="errors.price" style="color:red">{{ errors.price[0] }}</p>
            </div><br>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" class="form-control" id="file" @change="onInputChange($event)" />
                <img v-if="show_image" :src="show_image" height="80" width="80" />
            </div><br>

            <button type="submit" class="btn btn-info" @click.prevent="addProduct">Add</button>
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
                show_image: null,
                errors:{}
            }
        },

        methods: {

            addProduct() {

                let token = localStorage.getItem('user')

                let formData = new FormData();
                formData.append("title", this.title);
                formData.append("description", this.description);
                formData.append("image", this.image_file);
                formData.append("price", this.price);
                formData.append("token", token);

                const url = "/product/add"

                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer '+token
                }

                axios.post(url, formData, { 'headers' : headers } )
                    .then(response => {

                        this.$router.push("/");

                    })
                    .catch(error => {

                        if( error.response ) {
                            this.errors = error.response.data.errors
                        }

                    })
                    .then(() => {
                        
                    });


            },

            //for image file
            onInputChange(event) {
                const file = event.target.files[0];
                this.image_file = file;
                let that = this;
                let reader = new FileReader();
                reader.onload = (event) => {
                    // The file's text will be printed here
                    that.show_image = event.target.result;
                };
                reader.readAsDataURL(file);
            },

        }
    
    }

</script>