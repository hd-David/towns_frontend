<template>
   <div>
        <h4 class="text-center">Deleting town </h4>
    <div class="form-group">
        <form @submit.prevent="DeleteTown">
            <div>
                <input type="number" class ="form-control" v-model="form.id" placeholder="enter id of the town you want to delete"/><p>town id</p>
                <button type="submit" class="btn btn-primary">delete</button>
            </div>
        </form>
    </div> 
   </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'deleteTown',
    
    data(){
        return{
            form:{
                 id:''
            }   
        }
    },
    methods:{
        DeleteTown(){
            axios.delete('https://david.darwinist.io/proxy/5000/town', {data:this.form})
             .then(response => {
                 console.log(response.data);
             })
             .catch(function (error) {
                console.log(error.response)
             })
        }
    }
}
</script>