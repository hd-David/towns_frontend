<template>
   <div class="container">
     <button @click="SearchTown"> Search Town </button>

   </div>
</template>

<script>
import axios from 'axios';
export default {
        name: 'SearchTown',
        props: {
            messege: String
        },
  data(){
    return{
      search: [],
    }
    
    },
  methods :{
      SearchTown() {
    axios
      .get('https://david.darwinist.io/proxy/5000/town')
      .then((Response)=>{
        console.log('Response.json:', {
        message: 'Request received',})
        this.search = Response.data})
      .catch((error)=>{
        console.log(error)
      })
  }
 }
}

</script>