<template>
    <div class="container">
        <h2 class="text-center">Updating a Town info</h2>
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="updateTown">
                    <div class="form-group">
                        <input type="number" class ="form-control" v-model="form.id" placeholder="town id"/><p>town id</p>
                        <input type="text" class ="form-control" v-model="form.local_government_area"  placeholder="county"/><p>local_government_area</p>
                        <input type="text" class ="form-control" v-model="form.name" placeholder="name" /><p>name</p>
                        <input type="text" class ="form-control" v-model="form.town_type" placeholder="town type" /> <p>town type</p>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default{
    name:'UpdateTown',

    data(){
    return{
        form:{
            id:'',
            name:'',
            local_government_area:'',
            town_type:''

        }

        }
        
    },
    methods:{
        updateTown(){
            axios.patch('https://david.darwinist.io/proxy/5000/town',this.form)
            .then((response) => {// checking response in the console
            console.log(response.data)})
            .catch((error) => {
            console.log(error)});

        }
    }

}
</script>