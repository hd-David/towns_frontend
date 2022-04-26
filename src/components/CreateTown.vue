<template>
<div> 
    <h3> {{msg}}</h3>
    <p> we help you drive your business with the modern technology. </p>
  <form @submit.prevent='OnCreateTown'>
    <div class="form-control">
      <label>task</label>
      <input type="text" class ="form-control" v-model="text" name="text" placeholder="county" />
      <input type="text" class ="form-control" v-model="text" name="text" placeholder="name" />
      <input type="text" class ="form-control" v-model="text" name="text" placeholder="grid reference" />      
      <input type="number" step="any" class ="form- control" v-model="text" name="text" placeholder="latitude" />
      <input type="number" step="any" class ="form-control"  v-model="text" name="text" placeholder="longitude" />
      <input type="number" step="any" class ="form-control" v-model="text" name="text" placeholder="elevation" />
      <input type="text" class ="form- control" v-model="text" name="text" placeholder="postcode_sector" />
      <input type="text" class ="form- control" v-model="text" name="text" placeholder="nuts_region" />
      <input type="text" class ="form-control" v-model="text" name="text" placeholder="nation" />
      <input type="number" step="any" class ="form- control" v-model="text" name="text" placeholder="northing" />
      <input type="number" step="any" class ="form- control" v-model="text" name="text" placeholder="easting" />
      <input type="text" class ="form- control" v-model="text" name="text" placeholder="town_type" />
      <input type="text" class ="form- control" v-model="text" name="text" placeholder="local_government_area" />
    </div>
    <input type="submit" value="submit" class="btn btn-block" />
  </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CreateTown',
    props:{
        msg: String
    },

    data(){ // the data expected from the form
      return{
      form: { 
        county: '',
        name: '',
        grid_reference: '',
        latitude: '',
        longitude: '',
        elevation: '',
        postcode_sector:'',
        nuts_region:'',
        nation: '',
        northing:'',
        easting :'',
        town_type:'',
        local_government_area:'',
        }

      
      };
      
    },
    methods:{
      OnCreateTown(){ // when the submit button is clicked, the form data is submitted to the backend
        axios.post('https://david.darwinist.io/proxy/5000/town', this.form)
        .then((response) => {// checking response in the console
            console.log(response.data)});
                
      },
      
    },
};
</script>

<style scoped>
.form-control {
  margin: 10px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 48%;
  height: 20px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

</style>