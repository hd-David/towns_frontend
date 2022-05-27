<template>
<div class="container"> 
    <h3> {{msg}}</h3>
    <p> we help you drive your business with the modern technology. </p>
  <form @submit.prevent='OnCreateTown'>
    <div class="form-control">
      <label>Put a town on the list!</label> 
      <input type="text" class ="form-control" v-model="form.county" name="text" placeholder="county"/><p>county</p>
      <input type="text" class ="form-control" v-model="form.name" name="text" placeholder="name" /><p>name</p>
      <input type="text" class ="form-control" v-model="form.grid_reference" name="text" placeholder="grid reference" /> <p>grid reference</p>     
      <input type="number" step="any" class ="form-control" v-model="form.latitude" name="text" placeholder="latitude" /><p>latitude</p>
      <input type="number" step="any" class ="form-control"  v-model="form.longitude" name="text" placeholder="longitude" /><p>longitude</p>
      <input type="number" step="any" class ="form-control" v-model="form.elevation" name="text" placeholder="elevation" /><p>elevation</p>
      <input type="text" class ="form-control" v-model="form.postcode_sector" name="text" placeholder="postcode_sector" /><p>postcode sector</p>
      <input type="text" class ="form-control" v-model="form.nuts_region" name="text" placeholder="nuts_region" /><p>nuts region</p>
      <input type="text" class ="form-control" v-model="form.nation" name="nation" placeholder="nation" /><p>nation</p>
      <input type="number" step="any" class ="form-control" v-model="form.northing" name="text" placeholder="northing" /><p>northing</p>
      <input type="number" step="any" class ="form-control" v-model="form.easting" name="text" placeholder="easting" /><p>easting</p>
      <input type="text" class ="form-control" v-model="form.town_type" name="town_type" placeholder="town_type" /><p>town type</p>
      <input type="text" class ="form-control" v-model="form.local_government_area" name="local_government_area" placeholder="local_government_area" /><p>local government area</p>
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
.container {
width: 100;
height: 100;
margin: 10px;
align-content: left;
}
</style>
