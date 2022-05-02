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
      .get('https://chanty.darwinist.io/proxy/5000/town', {params: 
      {
    "county": "Derbyshire", 
    "name": "Ambaston"
}
      })
      .then(response => {
      console.log("hi data", 
      response.data.easting,
      response.data.local_government_area,
      response.data.county,
      response.data.name
      ),
      console.log("hi random", response.data)
})
 }
}
//  https//www.domain.com/page?key1=value1&key2=value2 
// https://chanty.darwinist.io/proxy/5000/town?name=Derbyshire&county=Ambaston

}
</script>
