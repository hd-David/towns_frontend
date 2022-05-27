<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <CreateTown msg= "welcome to darwinist"/> 
  <UpdateTown/><br>
  <deleteTown/><br>
  <SearchTown />

  </div>
</template>

<script>
import CreateTown from './components/CreateTown.vue'
import SearchTown from './components/SearchTown.vue'
import UpdateTown from './components/UpdateTown.vue'
import deleteTown from './components/deleteTown.vue'
export default {
  name: 'App',
  components: {
    CreateTown,
    SearchTown,
    UpdateTown,
    deleteTown
  }
}
</script>

<style>
#app {
  background-color: aquamarine;
  text-align: center;
}
</style>