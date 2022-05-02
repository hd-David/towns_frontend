<template>
   <div class="container">
    

 
   <div id="town-search">

  <div class="input-container">
   
     <input type="text" placeholder="Type a county" v-model="searchInputCounty"/>
      <input type="text" placeholder="Type a town's name" v-model="searchInputName"/>
      <button @click="SearchTown"> Search Town </button>
  </div>
 
<div class="columns medium-3" v-for="result in results" :key="result.value">

      <p>
        HELLO!!  {{ result }}.</p>

</div>  
  </div>
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
      searchInputCounty: [],
      searchInputName: [],
      results: []
    }
    
    },
  methods :{
    SearchTown() {
    axios
      .get('https://chanty.darwinist.io/proxy/5000/town', {params: 
      {
        // county: "Derbyshire"
    "county": this.searchInputCounty, 
    // name: "Ambergate",
    "name": this.searchInputName
}
      })
     .then(response => {
    this.results = response.data.county + response.data.name + response.data.nation
    console.log("hi results", response.data.results),
    console.log("hi county ", response.data.county),
    console.log("hi name", response.data.name)
    },
)
 }
}
//  https//www.domain.com/page?key1=value1&key2=value2 
// https://chanty.darwinist.io/proxy/5000/town?name=Derbyshire&county=Ambaston
// https://chanty.darwinist.io/proxy/5000/town?county=derbyshire

}
</script>
<style>
.input-container {
	border-radius: 5px;
	background: #677482;
	padding: 10px;
}

.input-container input {
	border: none;
	background: transparent;
	color: white;
	padding: 6px 15px;
	font-size: 18px;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #a6b0ba;
  opacity: 1; /* Firefox */
}
</style>