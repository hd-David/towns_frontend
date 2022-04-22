<template>
<div> 
    <h3> {{msg}}</h3>
    <p> we help you drive your business with the modern technolody. </p>
    <div class="alert alert-success" v-if="isSuccess">
            Post Created Successfully
        </div>
  <form @submit.prevent='OnCreateTown' class="add-town">
    <div class="form-control">
      <label>task</label>
      <input type="text" class ="form-control" v-model="text" name="text" placeholder="name" />
      <input type="number" step="any" class ="form-control" v-model="text" name="text" placeholder="elevation" />
      <input type="text" class ="form-control" v-model="text" name="text" placeholder="grid reference" />
      <input type="number" step="any" class ="form-control"  v-model="text" name="text" placeholder="longitude" />
      <input type="number" step="any" class ="form- control" v-model="text" name="text" placeholder="latitude" />
      <input type="text" class ="form- control" v-model="text" name="text" placeholder="postcode_secto" />
      <input type="text" class ="form- control" v-model="text" name="text" placeholder="nuts_region" />
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
        name: '',
        elevation: '',
        grid_reference: '',
        longitude: '',
        latitude: '',
        postcode_secto:'',
        nuts_region:'',
        northing:'',
        easting :'',
        town_type:'',
        local_government_area:'',
        isSuccess: false,

      
      };
      
    },
    methods:{
      OnCreateTown(){ // when the submit button is clicked, the form data is sent to the backend
        axios.post('https://david.darwinist.io/proxy/5000/town.json',{//using axios to make http requests
          name: this.name, elevation: this.elevation, grid_reference: this.grid_reference, longitude: this.longitude,
          latitude: this.latitude, postcode_sector: this.postcode_secto, nuts_region: this.nuts_region, northing: this.northing,
          easting: this.easting, town_type: this.town_type, local_government_area: this.local_government_area
          
        })
        .then((response) => {// checking response in the console
                    this.isSuccess = true;
                    console.log(response);
                    this.$emit('towncreated');
      });

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