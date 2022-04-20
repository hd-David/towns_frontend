<template>
<div> 
    <h3> {{msg}}</h3>
    <p> we help you drive your business with the modern technolody. </p>
</div>
  <form >
    <div class="form-control">
      <label>Town</label>
      <input type="text" v-model="text" name="text" placeholder="name" />
      <input type="text" v-model="text" name="text" placeholder="elevation" />
      <input type="text" v-model="text" name="text" placeholder="grid reference" />
      <input type="text" v-model="text" name="text" placeholder="longitude" />
      <input type="text" v-model="text" name="text" placeholder="latitude" />
    </div>
    <input type="submit" value="submit" class="btn btn-block" />
  </form>

</template>

<script>
export default {
    name: 'CreateTown',
    props:{
        msg: String
    }
}
</script>

<style scoped>
.form-control {
  margin: 10px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 50%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

</style>