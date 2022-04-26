<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <CreateTown msg= "welcom to darwinist"/>
  </div>
</template>

<script>
import CreateTown from './components/CreateTown.vue'
export default {
  name: 'App',
  components: {
    CreateTown
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 10px;
}
</style>
